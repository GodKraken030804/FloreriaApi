
import { fotoService } from "../services/fotosServicios.js";

export const fotosController = {
    getAllProducts : async (req, res) => {
        const allProducts = await fotoService.getAllProducts();
        res.status(200).send(allProducts);
    },
    getOneProduct : async (req, res) => {
        let id = req.params.id;
        const product = await fotoService.getOneProduct(id);
        res.status(200).send({ status: "OK", data: product });
    },
    createNewProduct : async (req, res) => {
        const data = req.body;
        const createProduct = await fotoService.createNewProduct(data);
        res.status(200).send({ status: "OK", data: createProduct });
    },
    updateOneProduct: async (req, res) => {
        const id = req.params.id;
        const data = req.body; // Obtener datos del cuerpo de la solicitud
        try {
            const updatedProduct = await fotoService.updateOneProduct(id, data);
            if (updatedProduct) {
                res.status(200).send({ status: "OK", data: updatedProduct });
            } else {
                res.status(404).send({ status: "Not Found", message: "Product not found or not updated" });
            }
        } catch (error) {
            res.status(500).send({ status: "Error", message: "Internal server error" });
        }
    },
    deleteOneProduct : async (req, res) => {
        let id = req.params.id;
        const deleteProduct = fotoService.deleteOneProduct(id);
        res.send("Delete an existing workout");
    }
}
