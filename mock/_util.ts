/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-27 12:15:21
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-27 12:20:27
 */

export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

export function resultSuccess<T = Record<string, any>>(result: T, { message = "ok" } = {}) {
  return {
    result,
    message,
    type: "success",
  };
}

export function resultError(message = "Request failed", { result = null } = {}) {
  return {
    result,
    message,
    type: "error",
  };
}

export function resultPageSuccess<T = any>(page: number, pageSize: number, list: T[], { message = "ok" } = {}) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function pagination<T = any>(pageIndex: number, pageSize: number, array: T[]): T[] {
  const offset = (pageIndex - 1) * Number(pageSize);
  const ret = offset + Number(pageSize) >= array.length ? array.slice(offset, array.length) : array.slice(offset, offset + Number(pageSize));
  return ret;
}
