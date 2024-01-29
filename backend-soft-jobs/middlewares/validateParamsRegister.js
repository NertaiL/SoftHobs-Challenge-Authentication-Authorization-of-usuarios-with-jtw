export const validateParamsRegister = (req,res,next) =>{
  const {email,password,rol,lenguage} = req.body
  if(!email || !password || !rol || !lenguage){
      return res.json({erro: "Falta email o password o rol o lenguage"})
  }
  next()
}




/* //with express valdator
import { body, validationResult } from 'express-validator';

export const validateParamsRegister = [
  body('user.email').isEmail().notEmpty(),
  body('user.password').notEmpty(),
  body('user.rol').notEmpty(),
  body('user.lenguage').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
]; */




