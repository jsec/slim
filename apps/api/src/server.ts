import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

const router = t.router;
const appRouter = router({
    hello: t.procedure
        .input(z.object({ name: z.string() }))
        .query((req) => {
            const { input } = req;
            return {
                text: `Hello ${input}`
            };
        })
});

export type AppRouter = typeof appRouter;
