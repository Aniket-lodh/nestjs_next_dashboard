// frontend/store/dashboard.ts
import { create } from 'zustand';
import axios from 'axios';
export const useDashboardStore = create((set) => ({
    metrics: null,
    revenue: null,
    loadAll: async () => {
        const [m, r, s, v, t] = await Promise.all([
            axios.get('/api/dashboard/metrics'),
            axios.get('/api/dashboard/revenue'),
            axios.get('/api/dashboard/customer-satisfaction'),
            axios.get('/api/dashboard/visitor-insights'),
            axios.get('/api/dashboard/top-products'),
        ]);
        set({ metrics: m.data, revenue: r.data, satisfaction: s.data, visitors: v.data, topProducts: t.data });
    }
}));
