import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalModule } from './hospital/hospital.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Training'), 
    GraphQLModule.forRoot({
      autoSchemaFile:true
    }),
    HospitalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
