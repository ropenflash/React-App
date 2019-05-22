import React from 'react'
import ContestPreview from './ContestPreview'
class App extends React.Component{
    state={
        contests:this.props.initialContests
        
    }
    
    // componentDidMount(){
    //     axios.get('/api/contests')
    //     .then(res=>
    //      this.setState({contests:res.data})
        
    //      )
    // }
    
    render(){
     
     return(
         <div className='App'>
        <h2> Naming Contests</h2>
        {this.state.contests.map((contest)=>
            
            <ContestPreview key={contest.id} contest={contest}/>)
        }
            
            
        
         </div>
         )
        
    }
    
    
    
}

export default App