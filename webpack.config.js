const path=require("path")
module.exports={
    entry:"./src/index.js",
    output:{
        filename:'bundle.js',
        publicPath:'public/',
        path:path.resolve('public')
    },
    module:{
        rules:[
            
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
                
            }
            
            ,
            {
                test:/\.json$/,
                exclude:/node_modules/,
                use:{
                    loader:'json-loader'
                }
                
            }
            
            ]
        
    }
}
