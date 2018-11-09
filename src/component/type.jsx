import React from 'react'
import RouteView from "router"
import {Link} from 'react-router-dom'
class Type extends React.Component{
    render(){
        let {routes}=this.props;
        return(
            <div>
                this is Type
                <Link to="/type/hot"> 去hot页</Link>
                <RouteView routes={routes}/>
            </div>
        )
    }
}
export default Type