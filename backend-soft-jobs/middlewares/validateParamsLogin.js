export const validateRegister = (req,res,next) =>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(404).json({error: "Faltan email o password"})
  }
  next()
}

/* //with express validator
import { check, validationResult } from "express-validator";

export const validateLoginMiddleware = [
  check("user.email").isEmail().withMessage("Ingrese un correo electrónico válido"),
  check("user.password").notEmpty().withMessage("La contraseña no puede estar vacía"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];
 */


