 // Instala la dependencia Winston

 const winston = require('winston');
 
 const logger = winston.createLogger({
   level: 'info',
   format: winston.format.json(),
   defaultMeta: { service: 'user-service' },
   transports: [
     //
     // - Write all logs with importance level of `error` or less to `error.log`
     // - Write all logs with importance level of `info` or less to `combined.log`
     //
     new winston.transports.Console(),
     new winston.transports.File({ filename: 'error.log', level: 'error' }),
     new winston.transports.File({ filename: 'combined.log' }),
   ],
 });
 
 //
 // If we're not in production then log to the `console` with the format:
 // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
 //
 if (process.env.NODE_ENV !== 'production') {
   logger.add(new winston.transports.Console({
     format: winston.format.simple(),
   }));
 }

// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const miFuncion = val => {
  if (val === 0) {
    return true;
  }
  throw new Error('El valor debe ser 0');
}

// Registra el error en un archivo a través de un try...catch

try {
  miFuncion(1);
} catch (e) {
  // Use template strings porque no se visualizaba el mensaje personalizado, con esto ya se muestra
  logger.error(`${e}`);
}


