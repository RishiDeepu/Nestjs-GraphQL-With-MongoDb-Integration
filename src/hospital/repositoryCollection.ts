import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IHospitalDoc } from "./entities/hospital.interface";

@Injectable()
export class RepositoryCollection{
  constructor(
    @InjectModel('Hospital') public readonly hospitalModel:Model<IHospitalDoc>
  ){}
}