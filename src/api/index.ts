import fastify from 'fastify';

const server = fastify();

server.get('/ping', async (_request, _reply) => {
    return 'pong\n';
});

server.listen({ port: 3000 }, (err, address) => {
    if (err != null) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
});
