import { Injectable } from '@nestjs/common';
import { MongoClient } from "mongodb";
import { ConfigService } from '../../config/config.service';


@Injectable()
export class VeiculosEPService {
    uri: string;
    client: any;
    veiculos: any;
    constructor (private readonly configService: ConfigService){
        const env = this.configService.get();
        this.uri = `mongodb+srv://${env.MONGODB_USERNAME}:${env.MONGODB_PASSWORD}@veiculos.mnqim.mongodb.net/${env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
        this.client = new MongoClient(this.uri);
        this.client.connect();
        const database = this.client.db('veiculos');
        const veiculos = database.collection('veiculos');
        // console.log(JSON.stringify(veiculos));
        this.veiculos = veiculos;

    }
    async getCars(): Promise<any> {
        const response = await this.veiculos.find({}).toArray();
        if (response.statusCode) return {error: response};
        return response;
    }
    async findCars(request): Promise<any> {
         const response = await this.veiculos.find({veiculo: new RegExp(request)}).toArray();
         if (response.statusCode) return {error: response};
         return response;
    }
    async newCar(request): Promise<any> {
        const ptDateObject = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        const dateObject = new Date(ptDateObject);
        const date = `${dateObject.getFullYear()}-${('0' + (dateObject.getMonth() + 1)).slice(-2)}-${('0' + (dateObject.getDate())).slice(-2)}`;
        const data = {
            veiculo: request.veiculo,
            ano: request.ano,
            descricao: request.descricao,
            vendido: request.vendido,
            created: date
        };
        const checkCar = await this.veiculos.find({veiculo: request.veiculo}).toArray(); 
        if (checkCar.length > 0) {
            return {error: { statusCode: 500, error: 'object already exists in the database', message: `${request.veiculo} exist on database`}};
        }
        await this.veiculos.insertOne(data);
        return await this.veiculos.find({}).limit(1).sort({$natural:-1}).toArray();
        
    }

}