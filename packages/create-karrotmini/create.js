const { Command } = require("commander");
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const pkg = require("./package.json");

module.exports = function create() {
  const program = new Command();

  program
    .name("create-karrotmini")
    .description("새 Karrotmini 프로젝트를 생성해요")
    .version(pkg.version);

  program.arguments("<projectName>", "프로젝트 이름");

  program.option("-t, --template <name>", "템플릿 이름", "vanilla");

  program.parse();

  const [projectName] = program.args;

  const outdir = path.resolve(`./${projectName}`);

  if (fs.existsSync(outdir)) {
    console.log(`[에러] "${projectName}"라는 이름을 가진 폴더가 이미 존재해요`);
    return process.exit(1);
  }

  const { template: templateName } = program.opts();
  const templatedir = path.join(__dirname, "./templates", templateName);

  if (!fs.existsSync(templatedir)) {
    console.log(
      `[에러] "${templateName}"라는 이름을 가진 템플릿을 찾을 수 없어요`
    );
    return process.exit(1);
  }

  fs.mkdirSync(outdir);
  fse.copySync(templatedir, outdir);

  // eslint-disable-next-line
  const templatePkg = require(`./templates/${templateName}/package.json`);
  templatePkg.name = projectName;

  fs.writeFileSync(
    path.join(outdir, "package.json"),
    JSON.stringify(templatePkg, null, 2),
    "utf-8"
  );

  console.log(`🎉 "${projectName}" 프로젝트가 성공적으로 생성되었어요`);
  console.log("");
  console.log("다음 스크립트를 CLI에 입력해서 시작하시길 권장드려요:");
  console.log(`$ cd ${projectName}`);
  console.log(`$ yarn install`);
  console.log(`$ yarn develop`);
  console.log("");
  console.log(`즐거운 코딩하세요! - 당근마켓 Mini 팀`);

  return process.exit(0);
};
