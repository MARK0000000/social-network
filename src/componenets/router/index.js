import Login from '../Login';
import Recommendations from '../Recommendations'
import Communities from '../Communities'
import News from '../News';
import Settings from '../Settings'
import Profile from '../Profile'
import Friends from '../Friends'
import Massenger from '../Messenger'

export const privateRoute = [
   {path: 'news', element: <News/>},
   {path: 'recommendations', element: <Recommendations/>},
   {path: 'communities', element: <Communities/>},
   {path: 'friends', element: <Friends/>},
   {path: 'massenger', element: <Massenger/>},
   {path: 'settings', element: <Settings/>},
   {path: 'profile', element: <Profile/>},

]

export const publicRoute = [
   {path: '/login', element: <Login/>},
]
