import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rodrigo Lourenço',
    email: 'rsilvape@gmail.com',
    password_hash: '12312312312',
  });
  return res.json(user);
});

module.exports = routes;
