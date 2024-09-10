import express from 'express'
import signale from 'signale';
import { productsController } from '../controllers/catalogoControl.js';

export const productsRouter = express.Router();


productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/:id", productsController.getOneProduct);
productsRouter.post("/", productsController.createNewProduct);
productsRouter.put("/:id",productsController.updateOneProduct);
productsRouter.delete("/:id",productsController.deleteOneProduct);