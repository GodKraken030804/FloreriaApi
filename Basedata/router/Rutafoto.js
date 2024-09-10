import express from 'express'
import signale from 'signale';
import { fotosController } from '../controllers/fotosControl.js';

export const fotosRouter = express.Router();

fotosRouter.get("/", fotosController.getAllProducts);
fotosRouter.get("/:id", fotosController.getOneProduct);
fotosRouter.post("/", fotosController.createNewProduct);
fotosRouter.put("/:id",fotosController.updateOneProduct);
fotosRouter.delete("/:id",fotosController.deleteOneProduct);