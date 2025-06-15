import express from "express"
import router from "./api/routes/student"
import cookieParser from "cookie-parser"

export const serverapp = ()=>{
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    app.use(cookieParser());

    console.log("hi")
    app.get("/",(req,res)=>{
        res.json({mssg : "hello world"})
    })

    app.use("/",router)



    return app ;
}