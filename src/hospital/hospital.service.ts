import { Injectable } from '@nestjs/common';
import { RepositoryCollection } from './repositoryCollection';

@Injectable()
export class HospitalService {
  constructor(private readonly repos:RepositoryCollection){}

  async add(data:any){
    let state=await this.repos.hospitalModel.create(data)
    return state
  }

  async edit(id:string,data:any){
    console.log("id",id);
    console.log("data",data);
    let state= await this.repos.hospitalModel.findByIdAndUpdate(
      id,
      data,
      {new:true}
    )
    console.log("state",state);
    
    return state;
  }

  async findAll(){
    return this.repos.hospitalModel.find()
  }
}
