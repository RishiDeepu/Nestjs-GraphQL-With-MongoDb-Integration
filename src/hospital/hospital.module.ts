import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { entities } from './entities';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { HospitalResolver } from './hospital.resolver';
import { RepositoryCollection } from './repositoryCollection';

@Module({
  controllers: [HospitalController],
  providers: [HospitalService, HospitalResolver,RepositoryCollection],
  imports:[MongooseModule.forFeature([...entities])]
})
export class HospitalModule {}
