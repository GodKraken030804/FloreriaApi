import {db} from '../../database/mysql.js'

export const productsService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM catalogos";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM catalogos WHERE id=?";
        const params = [id];
        try {
            const [result] = await db.query(sql, params);
            return result[0];
        } catch (error) {
            console.log("E")
            return null;
        }
    },
     
    createNewProduct : async (product) => {
        const sql = "INSERT INTO catalogos (nombre, descripcion, precio, categoria, fechaPublicada) VALUES (?, ?, ?, ?, ?)";
        const params = [product.nombre, product.descripcion, product.precio, product.categoria, product.fechaPublicada];
        try {
            const [result] = await db.query(sql, params);
            return {nombre: product.nombre, descripcion: product.descripcion, precio: product.precio, categoria: product.categoria, fechaPublicada: product.fechaPublicada , id: result.insertId}
        } catch (error) {
            return null;
        }
    },

    updateOneProduct: async (id, updatedProduct) => {
        const sql = "UPDATE producto SET nombreproduct = ?, cantidad = ?, costo = ?, descripcion = ? WHERE id = ?";
        const params = [updatedProduct.nombreproduct, updatedProduct.cantidad, updatedProduct.costo, updatedProduct.descripcion, id];
        try {
            const [result] = await db.query(sql, params);
            return result.affectedRows > 0 ? { id, ...updatedProduct } : null;
        } catch (error) {
            return null;
        }
    },
    
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM producto WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}