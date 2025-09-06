import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    metrics() {
        return {
            totalSales: 1000,
            totalOrders: 300,
            productsSold: 5,
            newCustomers: 8,
            changes: {
                totalSalesPct: '+8%',
                totalOrdersPct: '+6%',
                productsSoldPct: '+12%',
                newCustomersPct: '+0.5%',
            },
        };
    }

    revenue() {
        return {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            onlineSales: [500, 1000, 800, 1200, 900, 1500, 1100],
            offlineSales: [200, 300, 150, 250, 200, 400, 300],
        };
    }

    satisfaction() {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            lastMonth: [300, 320, 310, 330, 340, 300],
            thisMonth: [400, 420, 410, 430, 440, 500],
        };
    }

    visitorInsights() {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
            loyal: [200, 220, 210, 240, 260, 250, 270, 300, 280],
            new: [150, 160, 170, 180, 200, 210, 220, 230, 240],
            unique: [250, 260, 255, 270, 280, 290, 300, 310, 305],
        };
    }

    topProducts() {
        return [
            { rank: 1, name: 'Home Decor Range', popularity: 45, sales: 420 },
            { rank: 2, name: "Disney Princess Pink Bag 18'", popularity: 29, sales: 290 },
            { rank: 3, name: 'Bathroom Essentials', popularity: 18, sales: 180 },
            { rank: 4, name: 'Apple Smartwatches', popularity: 25, sales: 250 },
        ];
    }
}
