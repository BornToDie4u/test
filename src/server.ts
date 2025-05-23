import {serverapp} from "./app"


const startserver = async()=>{

    const port = process.env.PORT || 8000

    const app = serverapp();


    app.listen(port , ()=>{
        console.log("say hello to server");
    })
};



startserver().then(()=>{
    console.log("hogya startttttt maje karooooo !!!!!!!!!!")
})