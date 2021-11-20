import { Request, Response } from "express";
import { CreateEmployeeService } from "../services/CreateEmployeeService";

class EmployeeController {
  async create(request : Request, response: Response) {
    const {name,cpf,role}  = request.body;
    const createEmployeeService = new CreateEmployeeService();
    try {
      const employee = await createEmployeeService.execute({name,cpf,role})
      return response.status(201).json(employee);
    }catch(err) {
      return response.status(400).json(`error: ${err.message}`);
    }
  }
}
export {EmployeeController}