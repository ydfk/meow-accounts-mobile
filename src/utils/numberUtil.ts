/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-29 18:49:36
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-29 18:54:53
 */
export const formatThousands = (num: number, n = 2, symbol = ","): string => {
  if (num != undefined) {
    if (n < 0) {
      throw new Error("参数n不应该小于0");
    }

    const hasDot = `${num}`.indexOf(".") != -1; //这里检测num是否为小数，true表示小数
    const m = n != undefined ? n : 1;

    let result = m == 0 ? num.toFixed(m) + "." : hasDot ? (n ? num.toFixed(n) : num) : num.toFixed(m);

    result = result.toString().replace(/(\d)(?=(\d{3})+\.)/g, function (match, p1, p2) {
      return p1 + symbol;
    });

    if (n == 0 || (!hasDot && !n)) {
      //如果n为0或者传入的num是整数并且没有指定整数的保留位数，则去掉前面操作中的小数位
      result = result.substring(0, result.indexOf("."));
    }

    return result;
  } else {
    return "";
  }
};

export const formatMoney = (amount: number) => `￥${formatThousands(amount)}`;
