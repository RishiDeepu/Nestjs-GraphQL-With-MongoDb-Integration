import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateHospitaldto{

  @Field()
  name:string

  @Field()
  email:string

  @Field()
  place:string
  
  @Field()
  phonNo:string

}