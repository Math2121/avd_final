
import { Epi } from ".prisma/client";
import { EpiRepository } from "../repositories/EpiRepository";

interface IEmployee {
  name:     string,
  validate:      string,
  numero: number
}
class CreateEpiService {
  async execute({name,validate, numero} : IEmployee):Promise<Epi> {
    const epiRepository = new EpiRepository();
    const epi = await epiRepository.create({name,validate,numero});
    return epi;
  }
}
export {CreateEpiService}