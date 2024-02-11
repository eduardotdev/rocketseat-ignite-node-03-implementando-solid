import { FastifyInstance } from 'fastify'

import { authenticate } from './coontrollers/authenticate'
import { register } from './coontrollers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
}
