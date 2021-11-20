import {Router} from 'express';
import { DeliveryEpiController } from './controllers/DeliveryEpiController';
import { EmployeeController } from './controllers/EmployeeController';
import { EpiController } from './controllers/EpiController';

const routes = Router();

routes.post('/employees', new EmployeeController().create);
routes.post('/epi', new EpiController().create);
routes.post('/entregaepi', new DeliveryEpiController().create);
routes.get('/entregaepi', new DeliveryEpiController().show); //
routes.delete('/entregaepi', new DeliveryEpiController().delete); 
routes.put('/entregaepi/:delivery_id', new DeliveryEpiController().update);//
export default routes;