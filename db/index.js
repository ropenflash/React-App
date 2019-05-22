const MongoClient=require("mongodb")
const config=require("../config")
var _db
const url=config.development.url

module.exports={
    
    init:function(){
        
       MongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
           if(err)
           console.log(err.message)
            _db=client.db('learning_mongo')  
            console.log('Mongo succesfully connected')
           
       }) 
        
    },
    getDB: function(){
        
        return _db
        
    }
    
}