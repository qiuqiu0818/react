import React from 'react'
import { Route, Switch ,Redirect} from "react-router-dom"

class RouterMap extends React.Component{
    render(){
        let {routes}=this.props;
        const defaultRoute=<Route key={1} exact path={'/'|'/type'} component={()=>
            <Redirect to='/type/hot'/>
        }/>
        return(
            <Switch>
                {
                    routes.length&&routes.map((item,ind)=>{
                        return <Route key={ind} path={item.path} render={()=>{
                            return <item.component routes={item.children}/>
                        }}/>
                    }).concat([defaultRoute])
                }
            </Switch>
        )
    }
}
export default RouterMap