import { Router } from 'express';
import {addNewOrder} from '../controllers/OrderController.js';

const routes = new Router()

routes.get('/order', addNewOrder);

export default routes;