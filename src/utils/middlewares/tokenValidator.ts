import Jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import env from '../../configs';

export const isLoggedIn = Jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `${env.auth0Domain}/.well-known/jwks.json`,
  }),
  audience: env.auth0Audience,
  issuer: `${env.auth0Domain}/`,
  algorithms: ['RS256'],
});
