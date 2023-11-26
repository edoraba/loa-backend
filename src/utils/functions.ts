const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: 'http://loa/api',
  issuerBaseURL: `https://dev-khvspjr4fpqhzzvb.us.auth0.com`,
});

export { checkJwt };