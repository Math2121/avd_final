import prismaClient from '../prisma'
interface IEmployee {
  name:     string,
  cpf:      string,
  role: string
}
class EmployeeRepository {
  async create({name,cpf, role} : IEmployee) {
    const employee = await prismaClient.employee.create({
      data: {
        name,
        cpf,
        role,
      }
    })
    return employee;
  }
  async findByIdEmployee(employee_id: string){
    const delivery_epi = await prismaClient.employee.findFirst({
        where:{
          id:employee_id
        }
    
    })
      return delivery_epi;
  }

}
export {EmployeeRepository}