// src/dashboard/dashboard.controller.ts
import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('api/dashboard')
export class DashboardController {
    constructor(private readonly svc: DashboardService) { }

    @Get('metrics')
    getMetrics() { return this.svc.metrics(); }

    @Get('revenue')
    getRevenue() { return this.svc.revenue(); }

    @Get('customer-satisfaction')
    getSatisfaction() { return this.svc.satisfaction(); }

    @Get('visitor-insights')
    getVisitors() { return this.svc.visitorInsights(); }

    @Get('top-products')
    getTopProducts() { return this.svc.topProducts(); }
}
