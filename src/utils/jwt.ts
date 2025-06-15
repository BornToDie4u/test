import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "defaultSecret";

export const generateToken = (payload : object) =>{
    return jwt.sign(payload , JWT_SECRET , {expiresIn : "1h"});

};

export const verifyToken = (Token : string )=>{
    return jwt.sign(Token , JWT_SECRET);
}