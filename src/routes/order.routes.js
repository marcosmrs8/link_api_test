import { Router } from 'express';
import {addNewOrder, listAll, listDate} from '../controllers/OrderController.js';

const routes = new Router()

routes.post('/orders', addNewOrder);
routes.get('/list', listAll)
routes.get('/list/:date', listDate)

export default routes;