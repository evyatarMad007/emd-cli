import EMDFiles from '../utils/create-files';
import { firstWordUpperCase } from '../utils/utils';

class EMDNodeServerGenerator {

    // create controller file
    createController(Filename) {
        // @@@ check if base.controller.ts file exist
        // - if not exist, create it
        // - if exist, do nothing
        if (!EMDFiles.checkFileExist('base.controller.ts', './src/controllers')) {
            EMDFiles.createFileAndFolder(
                'base.controller.ts',
                './src/controllers',
                `
import { Response, Router } from "express";

export abstract class BaseController {

    router: Router;

    constructor() {
        this.router = Router();
        this.initialRoutes();
    }

    returnError(err: any, res: Response, statusCode: number = 500) {
        res.status(statusCode).json(err);
    }

    returnResponse<T = any>(data: T, res: Response, statusCode: number = 200) {
        res.status(statusCode).json(data);
    }

    abstract initialRoutes(): void
}
`)
        }
                
        EMDFiles.createFileAndFolder(
            `${Filename}.controller.ts`,
            './src/controllers',
            `
import { Request, Response } from "express";
import ${Filename}Service from "../services/${Filename}.service";
import { BaseController } from "./base.controller";


export default class ${firstWordUpperCase(Filename)}Controller extends BaseController {

    constructor() {
        super();
    }

    initialRoutes() {
        
        this.router.get("/", async (req: Request, res: Response) => {
            try {
                await ${Filename}Service.serviceMethod(req, res);
            } catch (error) {
                return this.returnError(error, res);
            }
        });
    }
}`)

}

    // create service file
    createService(Filename) {

        // @@@ check if base.service.ts file exist
        // - if not exist, create it
        // - if exist, do nothing
        if (!EMDFiles.checkFileExist('base.service.ts', './src/services')) {
            EMDFiles.createFileAndFolder(
                'base.service.ts',
                './src/services',
                `
import { FilterQuery, Model } from "mongoose";

export class BaseService<T = any> {
    protected model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    protected async getAll(): Promise<T[]> {
        try {
            return await this.model.find();
        } catch (err) {
            throw err;
        }
    }

    protected async list(limit: number, page: number): Promise<T[]> {
        try {
            page--;
            return await this.model.find().skip(limit * page).limit(limit);
        } catch (err) {
            throw err;
        }
    }

    protected async readById(id: string): Promise<T> {
        try {
            return this.model.findById(id);
        } catch (err) {
            throw err;
        }
    }

    protected async readByKey(key: string, value: string): Promise<T> {
        try {
            const result = await this.model.findOne({ [key]: value } as FilterQuery<T>);
            return result;
        } catch (err) {
            throw err;
        }
    }

    protected async create(value: T): Promise<T> {
        try {
            const result = await this.model.create(value);
            return result;
        } catch (err) {
            throw err;
        }
    }

    protected async update(value: T|any): Promise<T> {
        try {
            const result = await this.model.findOneAndUpdate({where:{id:value._id}},value);
            return result;
        } catch (err) {
            throw err;
        }
    }

    protected async deleteById(id: string):Promise<boolean> {
        try {
            await this.model.deleteOne({ _id: id });
            return true;
        } catch (err) {
            throw err;
        }
    }
}

export default BaseService;
`)
        }
        EMDFiles.createFileAndFolder(
            `${Filename}.service.ts`,
            './src/services',
            `
import { Response, Request } from "express";
import { I${firstWordUpperCase(Filename)} } from "../interfaces/${Filename}.Interface";
import { ${firstWordUpperCase(Filename)}Model } from "../models/${Filename}.model";
import BaseService from "./base.service";

class ${firstWordUpperCase(Filename)}Service extends BaseService {

    constructor() {
        super(${firstWordUpperCase(Filename)}Model)
    }

    serviceMethod = async (req: Request, res: Response): Promise<any> => {
        try {
            return Promise.resolve(res.status(201).json({ message: "success" }));
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export default new ${firstWordUpperCase(Filename)}Service();`
)
}


    // create interface file
    createInterface(Filename) {
        EMDFiles.createFileAndFolder(
            `${Filename}.interface.ts`,
            './src/interfaces',
            `
import { Document } from "mongoose";

export interface I${firstWordUpperCase(Filename)} {

}
    `
)
}

    // create models file
    createModel(Filename) {
        EMDFiles.createFileAndFolder(
            `${Filename}.model.ts`,
            './src/models',
            `
import { Schema, model } from 'mongoose';
import { I${firstWordUpperCase(Filename)} } from '../interfaces/${Filename}.Interface';

// @ create a ${firstWordUpperCase(Filename)} Schema 
const ${Filename}Schema = new Schema<I${firstWordUpperCase(Filename)}>({
    exampleKey: { type: String, required: true, trim: true },
}, { timestamps: true, versionKey: false });


// @ snippet for middleware pre save
${Filename}Schema.pre('save', (next: any) => {
    // condition for update
    next();
});

// export model ${firstWordUpperCase(Filename)}
export const ${firstWordUpperCase(Filename)}Model = model<I${firstWordUpperCase(Filename)}>('${firstWordUpperCase(Filename)}', ${Filename}Schema);
            `
)
}

}
    

export default new EMDNodeServerGenerator()