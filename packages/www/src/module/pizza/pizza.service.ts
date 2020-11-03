import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import {Pizza} from './model/pizza.entity'
import {Repository} from "typeorm";

@Injectable()
export class PizzaService {
  constructor(@InjectRepository(Pizza)private pizzasRepository: Repository<Pizza>) {}

  async findAll(): Promise<Pizza[]> {
    return await this.pizzasRepository.find();
  }

  async findId(id: number): Promise<Pizza> {
    return await  this.pizzasRepository.findOne(id)
  }
}
