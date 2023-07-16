import { useGetList } from "@hooks/request";
import { RequestT } from "@utils/types";
import {
    statisticsAds,
    statisticsSolvedAds,
    statisticsUsers,
} from "@utils/urls";
import { ISolvedAds, IUserStatistics } from "./type";
import PieStatistics from "./components/PieStatistics";
import { ChartStatistics } from "./components/ChartStatistics";

export const DashboardPage = () => {
    const { data } = useGetList<RequestT<IUserStatistics>>(
        "userStatistics",
        statisticsUsers
    );

    const { data: statistics } = useGetList<RequestT<any>>(
        "statistics",
        statisticsAds + "?interval=alltime"
    );

    console.log(statistics);

    const { data: solvedAds, isLoading } = useGetList<RequestT<ISolvedAds>>(
        "solvedAds",
        statisticsSolvedAds
    );

    return (
        <div className='dashboard'>
            <div className='dashboard-cards'>
                <div className='dashboard-card dashboard-card__flex-auto'>
                    <p className='dashboard-card__title'>
                        Ro’yxatdan o’tganlar
                    </p>
                    <h2 className='dashboard-card__number'>
                        {data?.data.alltime}
                    </h2>
                </div>
                <div className='dashboard-card'>
                    <p className='dashboard-card__title'>Bu oy</p>
                    <h2 className='dashboard-card__number'>
                        {data?.data.last30days}
                    </h2>
                </div>
                <div className='dashboard-card'>
                    <p className='dashboard-card__title'>Bu hafta</p>
                    <h2 className='dashboard-card__number'>
                        {data?.data.lastweek}
                    </h2>
                </div>
                <div className='dashboard-card'>
                    <p className='dashboard-card__title'>Bugun</p>
                    <h2 className='dashboard-card__number'>
                        {data?.data.lastday}
                    </h2>
                </div>
            </div>

            <div className='dashboard-row'>
                <div className='dashboard-col dashboard-col-8'>
                    <div className='dashboard-col__header'>
                        <div>
                            <h2 className='dashboard-col__title'>
                                Kuryerlar va Yo’lovchilar e’lonlari
                            </h2>
                            <p className='dashboard-col__subtitle'>
                                Kuryeryerlar: 856 | Yo’lovchilar: 400
                            </p>
                        </div>
                    </div>
                    {statistics && (
                        <ChartStatistics statistics={statistics?.data} />
                    )}
                </div>
                <div className='dashboard-col dashboard-col-4'>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <PieStatistics solvedAds={solvedAds?.data} />
                    )}
                </div>
            </div>
        </div>
    );
};
