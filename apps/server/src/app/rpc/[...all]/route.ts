import { RPCHandler } from '@orpc/server/fetch';
import type { NextRequest } from 'next/server';
import { appRouter } from '@/routers';

const handler = new RPCHandler(appRouter);

async function handleRequest(req: NextRequest) {
  const { response } = await handler.handle(req, {
    prefix: '/rpc',
    context: {},
  });

  return response ?? new Response('Not found', { status: 404 });
}

export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const PATCH = handleRequest;
export const DELETE = handleRequest;
