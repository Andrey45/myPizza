import { Resolver, Query, Args } from '@nestjs/graphql';
import { PizzaService } from "./pizza.service";
import {PizzaType} from "./model/create-pizza.dto";
import {HttpException, HttpStatus} from "@nestjs/common";
import {GraphQLError} from "graphql";


@Resolver()
export class PizzaResolver {
  constructor(private  readonly pizzaService: PizzaService) {}

  @Query(() => [PizzaType])
  async findAllPizza(){
    return await this.pizzaService.findAll();
  }

  @Query(() => PizzaType)
  async findPizzaId(@Args('id') id: number){
    const pizza = await this.pizzaService.findId(id);
    if(pizza) {
      return pizza
    }
    else {
      throw new HttpException({
        message: 'sfsdf',
        error: {
          'dgd':'sdsgsd'
        }
      }, HttpStatus.FORBIDDEN)
    }
  }
}
