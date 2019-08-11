class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  info(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ timestamp, message });
    console.log(`[${timestamp}] [INFO] - ${message}`);
  }

  error(error, additionalMessage) {
    additionalMessage = additionalMessage ? additionalMessage + '; ' : '';
    const timestamp = new Date().toISOString();
    this.logs.push({ timestamp, error, additionalMessage });
    console.log(`[${timestamp}] [ERROR] - ${additionalMessage}${error}`);
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
