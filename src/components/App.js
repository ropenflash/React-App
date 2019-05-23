import React from "react";
import ContentList from "./ContentList";
import Contest from './Contest'
const pushState = (obj, url) => window.history.pushState(obj, "", url);
import {fetchContest, fetchContestData} from "../api";
class App extends React.Component {
  state = {
    contests: this.props.initialContests
  };

  // componentDidMount(){
  //     axios.get('/api/contests')
  //     .then(res=>
  //      this.setState({contests:res.data})

  //      )
  // }

  fetchContest = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    
    
    fetchContestData(contestId).then(contest=>{

      this.setState({
       
        currentContestId:contest.id,
        newData:contest.categoryName,
        contests:{
          ...this.state.contests,
          [contest.id]:contest

        }

      })
  
     

    })


  }

  currentContent(){
    if(this.state.currentContestId){

      return <Contest />
      //{...this.state.contests[this.state.currentContestId]}
    }
    return <ContentList
    onContestClick={this.fetchContest}
    contests={this.state.contests}
  />

  }
  render() {
    return (
      <div className="App">
        <h2> Naming Contests</h2>
      {this.currentContent()}
       
      </div>
    );
  }
}

export default App;
