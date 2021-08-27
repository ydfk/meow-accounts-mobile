/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-27 20:27:22
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-27 21:26:37
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      /* 将px单位转换为视口单位的 (vw, vh, vmin, vmax) */
      /* 配置文档链接：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0 */
      viewportWidth: 375,
      viewportUnit: "vw",
      unitPrecision: 3,
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false,
      // selectorBlackList: ['.vant'], // 以xxx开头
      include: [], // 包括
      exclude: [], // 排除
    },
  },
};
