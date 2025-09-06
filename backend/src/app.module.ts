import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [DashboardModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule { }
