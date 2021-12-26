import { Args, Mutation, Query, Resolver,} from '@nestjs/graphql';
import { CreateHospitaldto } from './dtos/create-hospital.dto';
import { UpdateHospitalDto } from './dtos/update-hospital.dto';
import { HospitalService } from './hospital.service';
import { HospitalType } from './types/hospital.type';

@Resolver()
export class HospitalResolver {
  constructor(private readonly hospitalService: HospitalService) { }

  @Mutation(returns => HospitalType)
  async create(@Args('dto') dto: CreateHospitaldto) {
    return await this.hospitalService.add(dto)
  }

  @Mutation(returns => HospitalType)
  async update(
    @Args('id', { type: () => String }) id: string,
    @Args('dto') dto: UpdateHospitalDto
  ) {
    console.log(id);
    console.log(dto);
    return await this.hospitalService.edit(id,dto)
   }

   @Query(returns=>[HospitalType])
   async getAll(){
     return this.hospitalService.findAll()
   }

}
