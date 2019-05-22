import axios from 'axios'
import config from './config'


axios.get('/api/contests')
     .then((res)=>{
         console.log(res)
     }).catch(err=>console.log(err.message))