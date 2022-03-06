import { Router } from 'express';
import {addNewOrder, listAll, listByDate} from '../controllers/OrderController.js';

const routes = new Router()

routes.post('/orders', addNewOrder);
routes.get('/list', listAll)
routes.get('/list/:date', listByDate)

export default routes;