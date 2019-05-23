import React from 'react'

class ContestPreview extends React.Component{
    
handler=()=>{
this.props.onClick(this.props.id)

}

    render()
    {
    return(
    <div className='link ContestPreview' onClick={this.handler}>
    <div className='category-name'>
    {this.props.categoryName}
    
    </div>
    <div className='contest-name'>
    {this.props.contestName}
        </div>
        </div>
        )
    }
}

export default ContestPreview