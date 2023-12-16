import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'

interface RouteType {
    path: String,
    component : () => JSX.Element,
    name: string
}
const routes: RouteType[]  = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      // protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      // protected: true,
    },
    {
      path: "/about",
      component: About,
      name: "About",
      // protected: false,
    }
  ];

  export default routes 