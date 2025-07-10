// index.js
import { authorize , signout , change_password } from "./routes/auth"
const fastify = require('fastify')({ logger: true })
const fastifyCookie = require('@fastify/cookie');
const fastifySession = require('@fastify/session');
fastify.register(fastifyCookie);
fastify.register(fastifySession, {
  secret: 'akhilandjimitsittingunderatree',
  cookie: { secure: false }, // set to true in production with HTTPS
  saveUninitialized: false
});


fastify.get('/', async (request, reply) => {
  return { hello: 'hello world' }
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(` Server running at ${address}`)
})
