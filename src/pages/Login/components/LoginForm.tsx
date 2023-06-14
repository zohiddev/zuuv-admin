import { Form, Input, message, Button, Card, Row, Col, Typography } from "antd";
import { formLabel } from "@utils/helpers";
import { useCreate } from "@hooks/request";
import { loginUrl } from "@utils/urls";
import { ILoginRequest, LoginResultI } from "../type";
import { useAuthContext } from "@context/AuthProvider";
import { useContext } from "react";

const LoginForm = () => {
    // const { login } = useAuthContext();
    const { login } = useAuthContext();

    const { mutate, isLoading } = useCreate<ILoginRequest, LoginResultI>(
        loginUrl
    );

    const handleSubmit = (values: ILoginRequest) => {
        mutate(values, {
            onSuccess: (response) => {
                const { access_token, refresh_token, username } = response.data;
                login(access_token, refresh_token, username);
            },
            onError: (error) => {
                console.log(error);
                message.error("Malumotlar noto'g'ri kiritildi");
            },
        });
    };

    return (
        <Row className='w-full h-full'>
            <Col span={14} className='w-full h-full'>
                <div className='login-image__wrapper'>
                    <img src='/bg-01.jpg' />
                </div>
            </Col>
            <Col span={10} className='login-form__wrapper'>
                <Typography className='login-form__title'>Login</Typography>
                <Form
                    layout='vertical'
                    onFinish={handleSubmit}
                    autoComplete='off'
                >
                    <Form.Item
                        {...formLabel("Username", "username", [
                            {
                                min: 4,
                                message:
                                    "Username must be minimum 4 characters.",
                            },
                        ])}
                    >
                        <Input size='large' />
                    </Form.Item>

                    <Form.Item
                        {...formLabel("Password", "pwd", [
                            {
                                min: 3,
                                message:
                                    "Username must be minimum 3 characters.",
                            },
                        ])}
                    >
                        <Input.Password size='large' />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className='login-form__button'
                            htmlType='submit'
                            type='primary'
                            loading={isLoading}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default LoginForm;
