import express from "express";
import signale from "signale";
import { productsRouter } from "./Basedata/router/RutaCatalogo.js";
import { registroRouter } from "./Basedata/router/Rutacliente.js";
import { pedidosRouter } from "./Basedata/router/Rutapedidos.js";
import { fotosRouter } from "./Basedata/router/Rutafoto.js";


import cors from "./node_modules/cors/lib/index.js";

const app = express()

app.use(cors());
app.use(express.json())
app.use("/api/products",productsRouter);
app.use("/api/registro",registroRouter);
app.use("/api/pedidos",pedidosRouter);
app.use("/api/fotos",fotosRouter);


app.listen(3002, ()=> {
    signale.success("Server online in port 3002")
})