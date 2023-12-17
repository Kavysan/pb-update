import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'

interface RouteType {
    path: string,
    component : () => JSX.Element,
    name: string
}
const routes: RouteType[]  = [
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      // protected: true,
    },
    {
      path: "",
      component: Home,
      name: "Home Screen",
      // protected: false,
    },
    
    {
      path: "/about",
      component: About,
      name: "About",
      // protected: false,
    }
  ];

  export default routes 