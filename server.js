const express=require("express")
const app=express()
const config=require("./config")
const port=config.development.port
const host=config.development.host
const index=require("./routes")
const sass=require("node-sass-middleware")
const path=require("path")


/////
var clc = require("cli-color");
var mapping = {
    log: clc.white,
    warn: clc.yellow,
    error: clc.red
};

["log", "warn", "error"].forEach(function(method) {
    var oldMethod = console[method].bind(console);
    console[method] = function() {
        oldMethod.apply(
            console, [mapping[method](new Date().toISOString())]
                .concat(arguments)
        );
    };
});
/////





app.use(sass({
    
    src:path.resolve('sass'),
    dest:path.resolve('public')
    
}))

app.use(express.static('public'))

import './serverRender'

app.use('/',index)

app.listen(port,()=>{
    console.log('server is listening on '+ port)
})