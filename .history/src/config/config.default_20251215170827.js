/*
 * @Author: yzx-web123 1184699248@qq.com
 * @Date: 2025-12-15 17:05:53
 * @LastEditors: yzx-web123 1184699248@qq.com
 * @LastEditTime: 2025-12-15 17:08:26
 * @FilePath: \my-web-api\src\config\config.default.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const dotenv = require("dotenv");

dotenv.config();

// console.log(process.env.APP_PORT)

module.exports = process.env;
