import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { VeiculosEPModule } from '../../core/mongodb/veiculos/veiculos.module';

@Module({
	imports: [VeiculosEPModule],
	providers: [VeiculosService],
	controllers: [VeiculosController]
})
export class VeiculosModule { }
