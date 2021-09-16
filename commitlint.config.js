/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-30 12:10:59
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-16 20:14:34
 */
module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["gitmoji"],
};
