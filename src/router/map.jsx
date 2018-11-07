import React from 'react'
import { Route, Switch } from "react-router-dom"
import Routes from './routes'

class RouterMap extends React.Component{
    render(){
        return(
            <Switch>
                {
                    Routes.length&&Routes.map((item,ind)=>{
                        return <Route exact key={ind} path={item.path} component={item.component}/>
                    })
                }
            </Switch>
        )
    }
}
export default RouterMap