import rootRouter from "./routes";
const express = require('express');
import {Application} from "express";
import * as bodyParser from 'body-parser';

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
    }

    private async errorHandler(error: Error) {
        //TODO: Add error handler.
        console.log(error);
    }

    public getApp(): Application {
        return this.app;
    }
}

export default Server;