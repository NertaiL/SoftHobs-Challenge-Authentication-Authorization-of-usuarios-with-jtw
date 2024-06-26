/* import { byEmail } from "../src/models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findError } from "../src/utils/utils.js";
//este middlewares de loginuser es para la ruta la cual queramos proteger y darle autorizacion, en este caso la ruta get all de travels que nos traera todas las rutas
//hacerlo con express validator

export const isLogin = async (req, res) => {
  const { user } = req.body;

  try {
    const findUser = await byEmail(user);

    if (!findUser) {
      return await sendErrorResponse(res, "auth_01");
    }

    const isPasswordValid = bcrypt.compareSync(
      user.password,//el password que viene del body
      findUser.password //y el password que esta en la base de datos
    );

    if (!isPasswordValid) {
      return await sendErrorResponse(res, "auth_02");
    }

    const { email, nombre, apellido } = findUser;
    const token = await createToken(email);
    res.status(200).json({
      message: `Bienvenido, ${nombre} ${apellido} has iniciado sesion`,
      code: 200,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createToken = async (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {  //email es el payload que existira dentro del token cifrado osea la password
    expiresIn: "1h", //expiresIn en 1 hora expirara el token 
  });
  return token;
};

const sendErrorResponse = async (res, errorCode) => {
  const errorFound = findError(errorCode);
  res.status(errorFound[0].status).json({ error: errorFound[0].message });
};

 */