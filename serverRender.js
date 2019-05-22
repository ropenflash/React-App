import axios from 'axios'
import config from './config'
import React, { PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server'
import App from './src/components/App'

//
const serverRender=()=>
axios.get(`${config.development.serverUrl}/api/contest`)
     .then(res=>{
                
         return ReactDOMServer.renderToString(
         <App initialContests={res.data.contests}/>
         )
     })
     .catch(err=>{
                console.log('error in serverRender is :'+err.message)})

     

     export default serverRender