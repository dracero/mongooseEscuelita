const productMD = require ('../schemas/ProductSchema')

class Producto{
    constructor(){
    }

    async get(id){
        try {
            const producto = await productMD.findById(id)
            return producto
        } catch (err) {
            throw err
        }
    }
    
    async getAll(){
        try {
        const productos = productMD.find()
        return productos
        } catch (err) {
            throw err
        }
    }

    async save(data){
        try {
        const producto = await productMD.create(data)
        return producto
        } catch (err) {
            throw err
        }
    }

    async update(id, producto){
        try {
        const updated  = await productMD.updateOne({_id: id},{$set: producto})
        console.log(updated)
        if(!updated) return undefined
        
        return this.get(id)
        } catch (err) {
            throw err
        }   
       
    }
    async delete(id){
         try{
         const product = await this.get(id)
         if(!product) return undefined
 
         await productMD.deleteOne({ _id: product._id})
         return product
         } catch (err) {
            throw err
        }     
       
    }
}


module.exports = new Producto()
