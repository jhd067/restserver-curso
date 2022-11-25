import {response,request} from 'express'

const usuariosGet =(req,res= response)=>{
    const{nombre}= req.query
    res.json({
        msg:'get-Api',
       nombre
    });

}
const usuariosPost =(req=request,res= response)=>{
    const body= req.body;
    res.json({
        msg:'Post-Api',
        body
    });

}
const usuariosPut =(req,res= response)=>{
   

    res.json({
        msg:'Put-Api'
        
    });

}
const usuariosDelete =(req,res= response)=>{
    res.json({
        msg:'Delete-Api'
    });

}
export{usuariosGet,
       usuariosPost,
       usuariosPut,
       usuariosDelete
       
        
}