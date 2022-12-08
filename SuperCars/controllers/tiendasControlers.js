import tiendaModel from "../models/tiendaModel.js"

//creacion tienda
export async function createTienda(req, res){

    const tienda = req.body;
    let id = tienda.ciudad.substring(0,3)+tienda.sede.substring(0,3)
    let documento = null
    tienda._id= id.toUpperCase()

    try{
        documento = await tiendaModel.create(tienda)
    }catch(error){
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.send(documento)
}

//leer tiendas
export async function readTienda(req, res){

   const {_id} =req.params
   let documento = null
   
   try{
    documento = await tiendaModel.find({_id});
   }catch(error){
    res.status(400);
    res.json(error.message)
    return;
   }

   res.json(documento)
   res.status(200)
}

//actualizar tiendas
export async function updateTienda(req, res){
    const {id} = req.params
    const {cambios}= req.body

    let documento=null

    try{
        documento = await tiendaModel.updateOne({_id:id},cambios)
    }catch(error){
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

//eliminar tiendas
export async function deleteTienda(req, res){
    const {id} =req.params
    let documento = null

    try{
        documento = await tiendaModel.findByIdAndDelete({"_id":id})
    }catch(error){
        res.status(400);
        res.json(error.message);
        return;
    }
    res.sendStatus(200)
    res.json(documento)
}