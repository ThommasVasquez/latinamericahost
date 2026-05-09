import { auth } from '@/lib/auth/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const handler = auth.handler();

export const GET = async (req: Request) => {
  try {
    return await (handler as any).GET(req);
  } catch (e) {
    console.error("Auth GET Error:", e);
    return new Response(JSON.stringify({ 
      error: "Internal Auth Error", 
      message: e instanceof Error ? e.message : String(e),
      stack: e instanceof Error ? e.stack : undefined
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

export const POST = async (req: Request) => {
  try {
    return await (handler as any).POST(req);
  } catch (e) {
    console.error("Auth POST Error:", e);
    return new Response(JSON.stringify({ 
      error: "Internal Auth Error", 
      message: e instanceof Error ? e.message : String(e),
      stack: e instanceof Error ? e.stack : undefined
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
