import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class HospitalType {

  @Field()
  id:string
  
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  place: string

  @Field()
  phonNo: string


}