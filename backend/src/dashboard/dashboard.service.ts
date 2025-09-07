import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    metrics() {
        return {
            totalSales: 1500,
            totalOrders: 300,
            productsSold: 5,
            newCustomers: 8,
            changes: {
                totalSalesPct: '+8%',
                totalOrdersPct: '+6%',
                productsSoldPct: '+12%',
                newCustomersPct: '+0.5%',
            },
            countrySales: {
                "United States of America": 100,
                Brazil: 300,
                Nigeria: 150,
                "Saudi Arabia": 100,
                China: 250,
                Indonesia: 120,
            },
            volumeVsService: {
                labels: ["", "", "", "", "", "", ""],
                volumeData: [400, 520, 580, 490, 300, 350, 410],
                servicesData: [310, 420, 400, 320, 260, 300, 280],
                volumeTotal: 1135,
                servicesTotal: 636,
            }
        };
    }


    revenue() {
        return {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            onlineSales: [5000, 10000, 8000, 12000, 9000, 15000, 11000],
            offlineSales: [2000, 3000, 1500, 2500, 2000, 4000, 3000],
            targetVsReality: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
                realitySales: [6.2, 7.3, 5.8, 8.1, 7.6, 8.4, 7.9],
                targetSales: [8.0, 9.2, 8.3, 9.8, 12.1, 12.5, 12.0],
                realitySummary: 8823,
                targetSummary: 12123,
            },
        };
    }

    satisfaction() {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            lastMonth: [40, 45, 38, 39, 40, 42, 48],
            thisMonth: [64, 52, 55, 50, 57, 50, 61],
            summary: {
                lastMonthTotal: 3004,
                thisMonthTotal: 4504,
            },
        };
    }

    visitorInsights() {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Des'],
            loyal: [120, 340, 300, 250, 270, 230, 300, 330, 320, 270, 260, 280],
            new: [220, 180, 160, 170, 230, 290, 370, 310, 300, 240, 210, 200],
            unique: [290, 350, 370, 340, 270, 270, 330, 310, 290, 250, 210, 220],
        };
    }


    topProducts() {
        return [
            {
                rank: 1,
                name: "Home Decor Range",
                popularity: 49,
                sales: 41,
            },
            {
                rank: 2,
                name: "Disney Princess Pink Bag 18'",
                popularity: 29,
                sales: 29,
            },
            {
                rank: 3,
                name: "Bathroom Essentials",
                popularity: 18,
                sales: 18,
            },
            {
                rank: 4,
                name: "Apple Smartwatches",
                popularity: 25,
                sales: 25,
            },
        ];
    }

}
