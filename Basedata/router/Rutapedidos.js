import express from 'express'
import signale from 'signale';
import { pedidosController } from '../controllers/pedidosControl.js';

export const pedidosRouter = express.Router();

pedidosRouter.get("/", pedidosController.getAllProducts);
pedidosRouter.get("/:id", pedidosController.getOneProduct);
pedidosRouter.post("/", pedidosController.createNewProduct);
pedidosRouter.put("/:id",pedidosController.updateOneProduct);
pedidosRouter.delete("/:id",pedidosController.deleteOneProduct);