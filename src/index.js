import express from 'express'
import routes from './routes/order.routes.js'
import cors from 'cors'
import { connectDB } from './database/index.js';
import Swagger from 'swagger-ui-express'
import swaggerJson from './swagger.json'
import 'dotenv/config';

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(cors());
connectDB()
app.use('/api-docs',Swagger.serve, Swagger.setup(swaggerJson))
app.use('/v1', routes)

const listener = app.listen(5000, () => {
    console.log("App is listening on port " + listener.address().port);
});

export default app;