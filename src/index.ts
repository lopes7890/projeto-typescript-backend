import { server } from "./server/server";
import express from "express";

const app = express()

app.use("/teste", server);

app.listen(3333, () => {
    console.log("hello world!")
});