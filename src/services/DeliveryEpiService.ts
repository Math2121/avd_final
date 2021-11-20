import { Epi } from ".prisma/client";
import { DeliveryEpiRepository } from "../repositories/DeliveryEpiRepository";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { EpiRepository } from "../repositories/EpiRepository";

interface IDeliveryEpi {
  employee_id: string;
  epi_id: string;
  delivery_date: Date;
  amount_delivered: number;
}
class DeliveryEpiService {
  async execute({
    employee_id,
    epi_id,
    delivery_date,
    amount_delivered,
  }: IDeliveryEpi) {
    const deliverEpiRepository = new DeliveryEpiRepository();
    const epiRepository = new EpiRepository();
    const employeeRepository = new EmployeeRepository();
    const ifEmployeExist = await employeeRepository.findByIdEmployee(
      employee_id
    );
    console.log(ifEmployeExist);
    const ifEpiExists = await epiRepository.findByEpiId(epi_id);
    console.log(ifEpiExists);
    if (!ifEmployeExist) {
      throw new Error("Employee not exists");
    }
    if (!ifEpiExists) {
      throw new Error("EPI not exists");
    }

    const delivery_epi = await deliverEpiRepository.create({
      employee_id,
      epi_id,
      delivery_date,
      amount_delivered,
    });
    return delivery_epi;
  }

  async show() {
    const deliverEpiRepository = new DeliveryEpiRepository();

    const delivery_epi = await deliverEpiRepository.show();
    return delivery_epi;
  }

  async delete(id: string) {
    const deliverEpiRepository = new DeliveryEpiRepository();
    const ifDeliveryExists = await deliverEpiRepository.findById(id);
    if (!ifDeliveryExists) {
      throw new Error("Delivery not exists");
    }
    const delivery_epi = await deliverEpiRepository.delete(id);
  }
}
export { DeliveryEpiService };
