import tiendaModel from "../models/tiendaModel.js"

//creacion tienda
export async function createTienda(req, res){

    const tienda = req.headers;

    let documento = null

    try{
        let id = tienda.ciudad.substring(0, 3)+tienda.sede.substring(0, 3)
        tienda._id= id.toUpperCase()
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
        documento = await tiendaModel.findOne({_id});
   }catch(error){
        res.status(400);
        res.json(error.message)
        return
   }
   
    res.status(200)
    res.json(documento)
   
}

//actualizar tiendas
export async function updateTienda(req, res){
    const {id} = req.params
    const cambio= req.headers
    let documento=null

    try{
        documento = await tiendaModel.updateOne({
            _id:id
        },
            cambio,{ runValidators: true}
        )
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
    res.json(documento)
    res.status(200)
    
}