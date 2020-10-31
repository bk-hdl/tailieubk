import {NextFunction, Request, Response} from "express";
import sampleService from "../services/sampleService";

class SampleController {
    async getSample(request: Request, response: Response, next: NextFunction) {
        try {
            const sampleMessage: string = await sampleService.getSample();
            response.json({ message: sampleMessage });
        }
        catch (error) {
            next(error);
        }
    }
}

export default new SampleController();