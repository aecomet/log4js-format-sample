import log4js from 'log4js';

log4js.addLayout('json', () => (logEvent) => JSON.stringify(logEvent));

log4js.configure({
  appenders: {
    outputFile: {
      type: 'file',
      filename: 'development.log',
      layout: {
        type: 'json'
      }
    },
    outputStd: {
      type: 'stdout',
      layout: {
        type: 'json'
        // type: 'pattern',
        // pattern: '{"date":"%d","level":"%p","category":"%c","message":"%m"}'
      }
    }
  },
  categories: { default: { appenders: ['outputFile', 'outputStd'], level: 'trace' } }
});

var logger = log4js.getLogger('develop');

logger.trace('Entering cheese testing', 'yes', 'no', 1, 2, 3);
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
