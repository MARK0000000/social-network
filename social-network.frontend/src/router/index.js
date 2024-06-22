import Login from '../pages/Login';
import Recommendations from '../pages/Recommendations'
import Communities from '../pages/Communities'
import News from '../pages/News';
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'
import Friends from '../pages/Friends'
import Massenger from '../pages/Messenger'

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
