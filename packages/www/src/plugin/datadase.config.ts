import {TypeOrmModuleOptions} from "@nestjs/typeorm";
// Entuty
import {Pizza} from '../module/pizza/model/pizza.entity'

const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '23012699!Aa',
  database: 'myPizza',
  entities: [Pizza],
  synchronize: true
}

export default dbConfig
