import prismaClient from "../prisma";
interface IDeliveryEpi {
  employee_id: string;
  epi_id: string;
  delivery_date: Date;
  amount_delivered: number;
}
class DeliveryEpiRepository {
  async create({
    employee_id,
    epi_id,
    delivery_date,
    amount_delivered,
  }: IDeliveryEpi) {
    const delivery_epi = await prismaClient.ePI_delivery.create({
      data: {
        employee_id,
        epi_id,
        delivery_date,
        amount_delivered,
      },
    });
    return delivery_epi;
  }

  async update({
    employee_id,
    epi_id,
    delivery_date,
    amount_delivered,
  }: IDeliveryEpi) {
    const delivery_epi = await prismaClient.ePI_delivery.create({
      data: {
        employee_id,
        epi_id,
        delivery_date,
        amount_delivered,
      },
    });
    return delivery_epi;
  }

  async show() {
    const delivery_epi = await prismaClient.ePI_delivery.findMany({
      include: {
        employee: true,
        epi: true,
      },
    });
    return delivery_epi;
  }
  async delete(delivery_id: string) {
    const delivery_epi = await prismaClient.ePI_delivery.delete({
      where: {
        id: delivery_id,
      },
    });
  }
  async findById(id: string){
    const delivery_epi = await prismaClient.ePI_delivery.findFirst({
        where:{
          id:id
        }
    
    })
      return delivery_epi;
  }
}
export { DeliveryEpiRepository };
