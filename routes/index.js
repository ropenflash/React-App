const router=require("express").Router()
const path=require("path")
const db=require("../db")
import data from '../src/testData'


// initiating Mongo
db.init()
import serverRender from '../serverRender'
router.get('/',(req,res)=>{
  serverRender().then(content=>res.render(path.resolve("views/index"),{content})).catch(console.error)
    
    
})

router.route('/api/contests').get(async (req,res)=>{
   try{ 
        var _db=await db.getDB()
     var collection=_db.collection('contests')
     collection.find().toArray((err,docs)=>
     {
         if(err)
         console.log(err.message)
          res.send(docs)    
     }
     )

    }
    catch(err){
        console.log('error from route index is : '+ err.message)
    }
   })


   var contestsObj=data.contests.reduce((obj,contest)=>{
        obj[contest.id]=contest
        return obj
    
   },{})

   router.route('/api/contest').get(async (req,res)=>{
   res.send({contests:contestsObj})
    
    })


    
   router.route('/api/contest/:contestId').get(async (req,res)=>{
     let contest=contestsObj[req.params.contestId]
    contest.description='react app for practice'
     res.send({contest})
     
     })

module.exports= router