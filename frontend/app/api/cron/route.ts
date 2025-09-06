import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/health");
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Ping failed:", error);
        return NextResponse.json({ status: 500 });
    }
}