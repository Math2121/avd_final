import { EmployeeRepository } from "../repositories/EmployeeRepository"

interface IEmployee {
  name:     string,
  cpf:      string,
  role: string
}
class CreateEmployeeService {
  async execute({name,cpf, role} : IEmployee) {
    const employeeRepository = new EmployeeRepository();
    const employee = await employeeRepository.create({name,cpf,role});
    return employee;
  }
  
}
export {CreateEmployeeService}