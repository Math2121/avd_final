import { Request, Response } from "express";

import { CreateEpiService } from "../services/CreateEpiService";

class EpiController {
  async create(request : Request, response: Response) {
    const {name,validate,numero}  = request.body;
    const createEpi = new CreateEpiService();
    try {
        const epi = await createEpi.execute({name,validate,numero})
      return response.status(201).json(epi);
    }catch(err) {
      return response.status(400).json(`error: ${err.message}`);
    }
  }
}
export {EpiController}