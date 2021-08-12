import { Injectable } from '@nestjs/common';
import { VeiculoData } from './interfaces/controller';
import { VeiculosEPService } from '../../core/mongodb/veiculos/veiculos.service';

@Injectable()
export class VeiculosService {
  constructor(private readonly mongo: VeiculosEPService,
  ) { }

  async getCars(): Promise<VeiculoData[]> {

    let response: VeiculoData[] = []

    const result = await this.mongo.getCars();

    console.log('get /veiculos', JSON.stringify(result));
    response = result;

    return response;
  }
  async findCars(veiculo: string): Promise<VeiculoData[]> {

    let response: VeiculoData[] = []

    const result = await this.mongo.findCars(veiculo);

    console.log('get /veiculos/find/:veiculo', JSON.stringify(result));
    response = result;
    return response;
  }


  async newCar(request: VeiculoData): Promise<VeiculoData> {

    let response: VeiculoData = {}

    const entity: VeiculoData = {
      veiculo: request.veiculo,
      ano: request.ano,
      descricao: request.descricao,
      vendido: request.vendido
    };

    const result = await this.mongo.newCar(entity);
    console.log('post /veiculos', JSON.stringify(result));
    response = result;

    return response;

  }

}
