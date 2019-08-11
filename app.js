const APP_CONFIG = require('./modules/configuration/consts.js').APP_CONFIG;
const INTEGRATION = require('./modules/integration/integration.js');

async function mainApp() {
  let integrationFolder = await INTEGRATION.prepareIntegrationFolder();
  INTEGRATION.createOrUpdateTasks(integrationFolder);
}

async function initApp() {
  await mainApp();
  setInterval(mainApp, APP_CONFIG.interval_min * 60 * 1000);
}

initApp();
