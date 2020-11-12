'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http'),
    cors = require('cors');
    Container = require('typedi').Container;

var url = "mongodb://localhost:27017/";

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
const { default: Container } = require('typedi');
var serverPort = 8080;

// DB Connection
mongo = new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db("greenhero");
    Container.set('mongo', dbo);
    resolve();
  });
})
.then(() => {
  // swaggerRouter configuration
  var options = {
    swaggerUi: path.join(__dirname, '/swagger.json'),
    controllers: path.join(__dirname, './controllers'),
    useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
  };

  // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
  var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
  var swaggerDoc = jsyaml.safeLoad(spec);

  // Allow CORS
  app.use(cors());

  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());
    
    // Start the server
    http.createServer(app).listen(serverPort, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });

  });

})
.catch((err) => console.log('DB Connection did not work'));