import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { VeiculosModule } from './api/veiculos/veiculos.module';

import { config } from 'dotenv';

config();

@Module({
  imports: [
    ScheduleModule.forRoot(),
	VeiculosModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
