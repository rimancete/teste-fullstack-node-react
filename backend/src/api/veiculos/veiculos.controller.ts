import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VeiculosService } from './veiculos.service'
import { VeiculoData } from './interfaces/controller';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('veiculos')
@Controller('veiculos')
export class VeiculosController {

	constructor(private readonly veiculosService: VeiculosService) { }

	@Get()
	@ApiCreatedResponse({ type: VeiculoData })
	async getCars(): Promise<VeiculoData[]> {
		return await this.veiculosService.getCars();
	}

	@Get('find/:veiculo')
	@ApiCreatedResponse({ type: VeiculoData })
	async findCars(@Param('veiculo') veiculo: string): Promise<VeiculoData[]> {
		return await this.veiculosService.findCars(veiculo);
	}
	@Post()
	@ApiCreatedResponse({ type: VeiculoData})
	async newCar(@Body() request: VeiculoData): Promise <VeiculoData> {
		return await this.veiculosService.newCar(request);
	}

}

