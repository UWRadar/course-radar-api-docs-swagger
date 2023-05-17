import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger-config.yaml');
// const spec = require('./swagger-config.json');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
  supportedSubmitMethods: [] // disable try it out
});

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  // See https://demo.identityserver.io/ for configuration details.
  clientId: 'implicit'
});