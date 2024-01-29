import { findError } from "../utils/utils.js";
import { createRegistry,allRegister } from "../models/registerModel.js";

export const createRegisters = async (req,res) =>{
    try {
        const {email,password,rol,lenguage} = req.body
        const createdUser = await createRegistry(email,password,rol,lenguage)
        res.status(200).json({newRegister: createdUser})
    } catch (error) {
        console.log(error);
        const errorFound = findError(error.code)
        res.status(errorFound[0].status).json({error: errorFound[0].message})
    }
}

export const getAllRegisters = async (req,res) =>{
    try {
        const register = await allRegister()
        res.status(200).json(register)
    } catch (error) {
        console.log(error);
        const errorFound = findError(error.code)
        res.status(errorFound[0].status).json({error: errorFound[0].message})
    }
}