import { Module } from '@nestjs/common';
import { VeiculosEPService } from './veiculos.service';
import { ConfigModule } from '../../config/config.module';
@Module({
  imports: [ConfigModule],
  providers: [VeiculosEPService],
  exports: [VeiculosEPService]
})

export class VeiculosEPModule {}
