import { create } from 'zustand';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";


export const useDashboardStore = create((set) => ({
  metrics: null,
  revenue: null,
  satisfaction: null,
  visitors: null,
  topProducts: [],
  loadAll: async () => {
    const [m, r, s, v, t] = await Promise.all([
      axios.get(`${API_URL}/dashboard/metrics`),
      axios.get(`${API_URL}/dashboard/revenue`),
      axios.get(`${API_URL}/dashboard/customer-satisfaction`),
      axios.get(`${API_URL}/dashboard/visitor-insights`),
      axios.get(`${API_URL}/dashboard/top-products`),
    ]);
    set({ metrics: m.data, revenue: r.data, satisfaction: s.data, visitors: v.data, topProducts: t.data });
  },
}));
