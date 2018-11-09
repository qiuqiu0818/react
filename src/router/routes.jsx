import Home from 'comp/home';
import Type from 'comp/type';
import Hot from 'comp/type/hot';
import Rank from 'comp/type/rank';

const Routes=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/type',
        component:Type,
        children:[
            {
                path:'/type/hot',
                component:Hot
            },{
                path:'/type/rank',
                component:Rank
            }
        ]
    }
]
export default Routes