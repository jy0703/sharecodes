/*
东东工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
let shareCodes = [
  '',//账号一的好友shareCode
  '',//账号二的好友shareCode
]
let CKNumber = ''
CKNumber = process.env.JD_COOKIE.split('&').length;
console.log(CKNumber)

for (let i = 0; i < Number(CKNumber); i++) {
  if (process.env["DDFACTORY_SHARECODES"+i.toString()]) {
    shareCodes = process.env["DDFACTORY_SHARECODES"+i.toString()];
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['shareCodes' + index] = shareCodes;
  } else {
    break
  }
}
