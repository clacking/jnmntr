import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitorController } from './monitor/monitor.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, MonitorController],
  providers: [AppService],
})
export class AppModule {}
