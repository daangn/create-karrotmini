#!/usr/bin/env node

const create = require("./create");

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split(".");
const major = semver[0];

if (major < 14) {
  console.error(
    `현재 사용중인 Node.js ${currentNodeVersion} 버전을 사용하고 있어요.\n` +
      `create-karrotmini는 Node.js 14 버전 또는 그 이상 버전이 필요해요.\n` +
      `Node.js 버전을 업데이트 해주세요.`
  );
  process.exit(1);
}

create();
