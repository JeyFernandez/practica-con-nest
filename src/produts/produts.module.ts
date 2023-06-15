import { Module } from '@nestjs/common';
import { ProdutsService } from './produts.service';
import { ProdutsController } from './produts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produt } from './entities/produt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produt])],
  controllers: [ProdutsController],
  providers: [ProdutsService],
})
export class ProdutsModule {}
