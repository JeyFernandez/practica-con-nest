import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutsModule } from './produts/produts.module';
import { Produt } from './produts/entities/produt.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'claseDB',
      entities: [Produt],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProdutsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
