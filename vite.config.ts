import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, "src/pages"),
            "@data": path.resolve(__dirname, "src/data"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@context": path.resolve(__dirname, "src/context"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@components": path.resolve(__dirname, "src/components"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@api": path.resolve(__dirname, "src/api"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@assets": path.resolve(__dirname, "src/assets"),
        },
    },
});
