import { FastifyInstance } from 'fastify'

import { register } from './coontrollers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
