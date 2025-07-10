// index.js
import { login , register , signout , change_password } from "./routes/auth"
const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
  return { hello: 'hello world' }
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(` Server running at ${address}`)
})
