import { Request,Response,NextFunction } from "express";
import { verifyToken } from "../utils/jwt";


export const Prevent_Proxy = (req : Request , res : Response , next : NextFunction):void=>{
        const token = req.cookies?.attendance_token ;
        if (token) {
            try {
                const decoded = verifyToken(token);

                res.status(400).json({ message: 'Attendance already marked' });
            } catch (error) {
                
            }
        }
        next();
}