import rootRouter from "./routes";
const express = require('express');
import {Application, NextFunction, Response, Request} from "express";
import * as bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
import * as path from "path";
import * as YAML from 'yamljs';

class Server {
    private readonly app: Application;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json({ limit: '2mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }));
        this.app.use(
            bodyParser.raw({
                inflate: true,
                limit: '10MB',
                type: 'application/octet-stream',
            }),
        );
        //TODO: Add cookie parser, authentication...
        this.app.use('/api', rootRouter);
        this.app.use(this.errorHandler);
        const options = {
            swaggerOptions: {
                docExpansion: 'none',
            },
            explorer: true,
        };
        const swaggerDoc = YAML.load(path.join(__dirname, './swagger.yaml'));
        //TODO: Change swagger host by env.
        this.app.use('/doc/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));
    }

    private async errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
        //TODO: Add error handler.
        console.log(error);
        next();
    }

    public getApp(): Application {
        return this.app;
    }
}

export default Server;