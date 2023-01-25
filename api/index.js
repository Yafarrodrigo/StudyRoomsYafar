const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { createTestData } = require('./seeder.js');

const createMockData = true; // <--- cambiar a false para no sobreescribir la DB

conn.sync({ force: createMockData })
  .then(() => {

    server.listen(process.env.PORT, async () => {

      try {
        createMockData && await createTestData();
      } catch (error) {
        console.log(error)
      }

      console.log('--------------------------------');
      // console.log('creada el mockup de datos');
      console.log(`'server up (port: ${process.env.PORT})'`); // eslint-disable-line no-console
    });
  })

/*     ..---..
     .'  _    `.
 __..'  (o)    :    LES DEJO UN PATO
`..__          ;
     `.       /
       ;      `..---...___
     .'                   `~-. .-')
    .                         ' _.'
   :                           :
   \                           '
    +                         J
     `._                   _.'
        `~--....___...---~' */
