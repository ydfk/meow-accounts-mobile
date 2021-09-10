/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-09-10 20:48:22
 * @LastEditors: ydfk
 * @LastEditTime: 2021-09-10 20:54:38
 */
import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

//@ts-ignore
const modules = import.meta.globEager("./**/*.ts");

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes("/_")) {
    return;
  }
  mockModules.push(...modules[key].default);
});

export function setupProdMockServer() {
  createProdMockServer([...mockModules]);
}
