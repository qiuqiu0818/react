import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import RouteMap from './map'

class RouterView extends React.Component{
    render(){
        return (
            <Router>
                <RouteMap/>
                {/* <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/type" component={Type} />
                </Switch> */}
          </Router>
        )
    }
}
export default RouterView