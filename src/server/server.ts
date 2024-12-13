import { Router, Request, Response } from "express";

const server = Router();

server.get('/', (req: Request, res: Response) => {
    res.send("hello world!");
});

export { server }