/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1561446445415_5263';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: false,
  };
  config.sequelize = {
    username: 'root',
    password: 'liuxing',
    database: 'solomining-data',
    host: '127.0.0.1',
    dialect: 'mysql',
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
