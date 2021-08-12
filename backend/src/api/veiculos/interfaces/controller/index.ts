import { ApiProperty } from '@nestjs/swagger';


export class VeiculoData {

	@ApiProperty()
	veiculo?: string;

	@ApiProperty()
	ano?: number;

	@ApiProperty()
	descricao?: string;

	@ApiProperty()
	vendido?: boolean;


	@ApiProperty()
	created?: Date;

	@ApiProperty()
	_id?: string;


}

