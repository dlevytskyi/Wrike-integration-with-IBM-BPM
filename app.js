const APP_CONFIG = require('./modules/configuration/consts.js').APP_CONFIG;
const INTEGRATION = require('./modules/integration/integration.js');
const Logger = require('../logger/logger.js');
const logger = new Logger().getInstance();

async function mainApp() {
  let integrationFolder = await INTEGRATION.prepareIntegrationFolder();
  INTEGRATION.createOrUpdateTasks(integrationFolder);
}

async function initApp() {
  logger.info('Start main app');
  await mainApp();
  logger.info('Start interval mainApp');
  setInterval(mainApp, APP_CONFIG.interval_min * 60 * 1000);
}

initApp();
