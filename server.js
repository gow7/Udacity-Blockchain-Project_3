'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const BC = require('./simpleChain');

const server = new Hapi.server({
    port: 8000,
    host: 'localhost'
});

server.route({
    method: '*',
    path: '/',
    handler: (request, h) => {
        return `<h1>Welcome to Project on Blockchain RESTful Web API with Node.js Framework</h1>
        <h3>Supported methods</h3>
        <b>GET</b> /block/{height}<br>
        <b>POST</b> /block<br>
        `;
    }
});

server.route({
    method: 'GET',
    path: '/block/{height}',
    options: {
        validate: {
            params: {
                height: Joi.number().integer().required()
            }
        }
    },
    handler: async (request, h) => {
        try {
            return await BC.getBlock(request.params.height);
        } catch (error) {
            if (error.type === 'NotFoundError') {
                return h.response('Height Not Found').code(404);
            }
        }
    }
});

server.route({
    method: 'POST',
    path: '/block',
    options: {
        validate: {
            payload: {
                body: Joi.string().trim().required()
            }
        }
    },
    handler: async (request, h) => {
        try {
            return h.response(await BC.addBlock(request.payload.body.trim())).code(201);
        } catch (error) {
            return h.response(error.name + " " + error.message).code(500);
        }
    }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();