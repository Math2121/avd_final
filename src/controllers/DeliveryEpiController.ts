import { Request, Response } from "express";

import { DeliveryEpiService } from "../services/DeliveryEpiService";

class DeliveryEpiController {
  async create(request : Request, response: Response) {
    const {employee_id,epi_id,delivery_date,amount_delivered}  = request.body;
    const deliveryEpi = new DeliveryEpiService();
    try {
      const delivery_epi = await deliveryEpi.execute({employee_id,epi_id,delivery_date,amount_delivered})
      return response.status(201).json(delivery_epi);
    }catch(err) {
      return response.status(400).json(`error: ${err.message}`);
    }
  }

  async show(request : Request, response : Response) {
    const deliveryEpi = new DeliveryEpiService();
    try {
      const delivery_epi = await deliveryEpi.show()
      return response.status(201).json(delivery_epi);
    } catch (error) {
      return response.status(400).json(`error: ${error.message}`);
    }
  }

  async delete(request : Request, response : Response) {
    const deliveryEpi = new DeliveryEpiService();
    const {id} = request.params
    try {
      await deliveryEpi.delete(id)
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json(`error: ${error.message}`);
    }
  }

  async update(request : Request, response : Response) {
    const deliveryEpi = new DeliveryEpiService();
    const {employee_id,epi_id,delivery_date,amount_delivered}  = request.body;
    const {delivery_id} = request.params
    try {
      await deliveryEpi.update({delivery_id,employee_id,epi_id,delivery_date,amount_delivered})
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json(`error: ${error.message}`);
    }
  }
}
export {DeliveryEpiController}