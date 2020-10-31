import {Application} from "express";
import Server from "./server";

const port: string = process.env.PORT || '3000';                //TODO: Add envProfile
const app: Application = new Server().getApp();

app.listen(port, () => {
    if (process.send) {
        process.send('ready');
    }
    console.log('Express server listening on port ' + port);
});