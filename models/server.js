import express from 'express'
import cors from 'cors' 
import { router } from "../routes/usuarios.js";

 
class Server{
    constructor(){
        this.app= express();
        this.port=process.env.PORT;
        //Middlewares
       this.middlewares();

        //Rustas de aplicacion

        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors());
        //Directorio publico
        this.app.use(express.static('public'));
        //lectura y parseo del body
        this.app.use(express.json());
    
    }
    routes(){
        this.app.use('/api/usuario', router);
    }
    listen(){
       this.app.listen(this.port,()=>{
            console.log('servidor comunicando', this.port);
          
          });

    }



};
export{
    Server,
}

