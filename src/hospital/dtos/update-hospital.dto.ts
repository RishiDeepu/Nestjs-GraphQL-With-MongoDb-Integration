import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateHospitalDto {
  @Field()
  id:string

  @Field({nullable:true})
  name: string

  @Field({nullable:true})
  email: string

  @Field({nullable:true})
  place: string

  @Field({nullable:true})
  phonNo:string

}