import {db} from '../../database/mysql.js'

export const registroService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM cliente";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM cliente WHERE id=?";
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
        const sql = "INSERT INTO cliente ( gmail, contrasena, telefono, direccion ) VALUES (?, ?, ?, ?)";
        const params = [product.gmail, product.contrasena, product.telefono, product.direccion];
        try {
            const [result] = await db.query(sql, params);
            return {gmail: product.gmail, contrasena: product.contrasena,telefono: product.telefono, direccion: product.direccion, id: result.insertId}
        } catch (error) {
            return null;
        }
    },
    
    updateOneProduct : async (id, product) => {
        const sql = "UPDATE registro SET nombre = ?, correo = ?, telefono = ?, password = ? WHERE id = ?";
        const params = [product.nombre, product.correo, product.telefono, product.password, id];
        try {
          const [result] = await db.query(sql, params);
          return result;
        } catch (error) {
          return null;
        }
    },
      
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM registro WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}