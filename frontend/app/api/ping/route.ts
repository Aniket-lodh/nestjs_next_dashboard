import axios from 'axios';
export async function GET() {
    try {
        await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/health");
        return new Response("Pinged backend successfully", { status: 200 });
    } catch (error) {
        console.error("Ping failed:", error);
        return new Response("Ping failed", { status: 500 });
    }
}
    