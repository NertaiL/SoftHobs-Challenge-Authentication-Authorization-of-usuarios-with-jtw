import  bcrypt  from "bcryptjs";
import  pool  from "../../config/db/connectionDb.js";

export const createRegistry = async (email,password,rol,lenguage) =>{
    const hadleshPassword = bcrypt.hashSync(password)
    const SQLquery = {text: "INSERT INTO usuarios (email,password,rol,lenguage) VALUES($1,$2,$3,$4) RETURNING*",
                      values: [email,hadleshPassword,rol,lenguage]}
    const response = await pool.query(SQLquery)
    return response.rows[0]
}

export const allRegister = async () =>{
    const SQLquery = {text:"SELECT * FROM usuarios;"}
    const response = await pool.query(SQLquery)
    return response.rows
}

export const byEmail = async (email) =>{
    const SQLquery = {text: "SELECT * FROM usuarios WHERE email = $1",
                      values: [email]}
    const response = await pool.query(SQLquery)
    return response.rows[0]
}

