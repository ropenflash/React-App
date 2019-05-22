const express=require("express")
const app=express()
const config=require("./config")
const port=config.development.port
const host=config.development.host
const index=require("./routes")
const sass=require("node-sass-middleware")
const path=require("path")
const dotenv=require('dotenv')
dotenv.config()


app.use(sass({
    
    src:path.resolve('sass'),
    dest:path.resolve('public')
    
}))

app.use(express.static('public'))
app.set('view engine','pug')



app.use('/',index)

app.listen(port,config.development.host,()=>{
    console.log('server is listening on '+ port)
})