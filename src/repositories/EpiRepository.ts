import prismaClient from '../prisma'
interface IEpi {
  name:     string,
  validate:      string,
  numero: number
}
class EpiRepository {
  async create({name,validate, numero} : IEpi) {
    const employee = await prismaClient.epi.create({
      data: {
        name,validate, numero
      }
    })
    return employee;
  }
  async findByEpiId(epi_id: string){
    const delivery_epi = await prismaClient.epi.findFirst({
        where:{
          id:epi_id
        },
    
    })
      return delivery_epi;
  }
}
export {EpiRepository}