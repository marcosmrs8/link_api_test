import { Router } from 'express';
import {addNewOrder, listAll} from '../controllers/OrderController.js';

const routes = new Router()

routes.get('/order', addNewOrder);
routes.get('/listAll', listAll)

export default routes;