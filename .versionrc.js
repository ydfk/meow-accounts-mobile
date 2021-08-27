/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2021-08-27 12:52:46
 * @LastEditors: ydfk
 * @LastEditTime: 2021-08-27 12:53:55
 */
module.exports = {
  skip: {
    tag: true,
  },
  //types为Conventional Commits标准中定义，目前支持
  //https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  types: [
    { type: "feat", section: "新特性" },
    { type: "fix", section: "Bug修复" },
    { type: "docs", section: "文档" },
    { type: "chore", section: "配置项", hidden: true },
    { type: "style", section: "格式", hidden: true },
    { type: "refactor", section: "重构", hidden: true },
    { type: "perf", section: "性能", hidden: true },
    { type: "test", section: "测试", hidden: true },
    { type: "build", section: "构建", hidden: true },
    { type: "ci", section: "CI", hidden: true },
    { type: "revert", section: "回滚", hidden: true },
  ],
  //hash链接
  commitUrlFormat: "https://github.com/ydfk/{{repository}}/commit/{{hash}}",
  //issue链接
  issueUrlFormat: "https://github.com/ydfk/{{repository}}/issues/{{id}}",
  //server-version自动commit的模板
  releaseCommitMessageFormat: "build: v{{currentTag}}版本发布",
  //需要server-version更新版本号的文件
  bumpFiles: [
    {
      filename: "MY_VERSION_TRACKER.txt",
      // The `plain-text` updater assumes the file contents represents the version.
      type: "plain-text",
    },
    {
      filename: "package.json",
      // The `json` updater assumes the version is available under a `version` key in the provided JSON document.
      type: "json",
    },
  ],
};
