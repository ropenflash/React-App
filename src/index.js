import ReactDOM from 'react-dom'
import React from 'react'
import tours from '!./tours'
import data from '!./testData'
import App from './components/App'
import axios from 'axios'

axios.get('/api/contest')
    .then(res=>
        ReactDOM.render(<App initialContests={res.data.contests}/>,document.getElementById('root'))
       
    
     )


