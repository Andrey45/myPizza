import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dbConfig from '../plugin/datadase.config'
import {PizzaModule} from "../module/pizza/pizza.module";
import {GraphQLError} from "graphql";



@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      formatError: (error: GraphQLError) => ({message: error.message, extensions: error.extensions.exception.response.error})
    }),
    PizzaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
