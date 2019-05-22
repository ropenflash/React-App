const router=require("express").Router()
const path=require("path")
const db=require("../db")
import data from '../src/testData'


// initiating Mongo
db.init()

router.get('/',(req,res)=>{
   
    res.sendFile(path.resolve("views/index.html"))
    
})

router.route('/api/contests').get(async (req,res)=>{
     var _db=await db.getDB()
     var collection=_db.collection('contests')
     collection.find().toArray((err,docs)=>
     {
         if(err)
         console.log(err.message)
          res.send(docs)    
     }
     )
   })

module.exports= router