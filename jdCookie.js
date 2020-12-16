/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_key=AAJft_YTADCGPcnXvZn1NbluSjHjHaaE4Z-UQjxiSvlguPpn37jVtPpXahtDlnbe7f7wYiIRnno;pt_pin=%E4%B8%80%E5%BF%83%E4%B8%80%E6%84%8F523',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJf2LtpADCKU3fjb4rrW5ugcBu9mUZx4SwV4VS9Z9tYPeUZwlTXPSkIbe2hHYwMiQqiHYCKomo;pt_pin=jd_mdedkvRwtpve',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_key=AAJf2LZLADA18eZI0DcCc_qVBbLiMq2YWO-6tPuUCAWH27DYb-vPg60j7bQohlEX6_tvKt3PD0w;pt_pin=jd_58683f0d93e6f',//账号一ck,例:pt_key=XXX;pt_pin=XXX;

]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
