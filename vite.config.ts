/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-24 17:24:45
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-12 22:46:39
 */
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";
import styleImport from "vite-plugin-style-import";
import WindiCSS from "vite-plugin-windicss";

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), ".", dir);
};

export default ({ mode, command }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  const isBuild = command === "build";

  const mockPlugin =
    env.VITE_USE_MOCK &&
    viteMockServe({
      ignore: /^\_/,
      mockPath: "mock",
      localEnabled: command === "serve",
      prodEnabled: command !== "serve" && isBuild,
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer';
        setupProdMockServer();
      `,
    });

  return defineConfig({
    plugins: [
      vue({ refTransform: true }),
      WindiCSS(),
      mockPlugin,
      styleImport({
        libs: [
          {
            libraryName: "vant",
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      }),
    ],
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve("src") + "/",
        },
        {
          find: /#\//,
          replacement: pathResolve("types") + "/",
        },
        {
          find: "dayjs",
          replacement: "dayjs/esm",
        },
      ],
    },
    base: "./",
    server: {
      port: Number(env.VITE_PORT), // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域

      // 设置代理，根据我们项目实际情况配置
      proxy: {
        "/api": {
          target: env.VITE_PROXY_HOST,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
          configure: (proxy) =>
            proxy.on("proxyReq", (proxyRes, req, res) => {
              console.log("🚀 proxyRes", proxyRes);
              //console.log("🚀 req", req);
              //console.log("🚀 res", res);
            }),
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/var.scss";`,
        },
      },
    },

    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  });
};
