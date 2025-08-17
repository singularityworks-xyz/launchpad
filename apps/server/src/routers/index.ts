import type { RouterClient } from '@orpc/server';
import { publicProcedure } from '../lib/orpc';

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return 'OK';
  }),
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
