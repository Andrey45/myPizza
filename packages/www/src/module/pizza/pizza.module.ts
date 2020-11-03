import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Pizza} from "./model/pizza.entity";
import {PizzaService} from "./pizza.service";
import {PizzaResolver} from "./pizza.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([Pizza])],
  providers: [PizzaResolver,PizzaService],
})
export class PizzaModule {}
