import express from 'express'
import signale from 'signale';
import { registroController } from '../controllers/clientteControl.js';

export const registroRouter = express.Router();

registroRouter.get("/", registroController.getAllProducts);
registroRouter.get("/:id", registroController.getOneProduct);
registroRouter.post("/", registroController.createNewProduct);
registroRouter.put("/:id",registroController.updateOneProduct);
registroRouter.delete("/:id",registroController.deleteOneProduct);