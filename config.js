const env=process.env

module.exports={
    
   development:{
                url:"mongodb://localhost:27017",
                port:env.PORT||8080,
                host:env.HOST||'0.0.0.0',
                get serverUrl(){return `http://${this.host}:${this.port}` }
               },
               
   production:{
                url:"mongodb://localhost:27017",
                port:env.PORT||8080,
                host:env.HOST||'0.0.0.0',
                get ServerUrl(){return `http:${this.host}:${this.port}` }
               }
    
}