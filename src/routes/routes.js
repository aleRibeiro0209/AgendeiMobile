import RoutesAuth from "./routesAuth";
import RoutesGuest from "./routesGuest";

const Routes = () => {
  const user = {
   // id_user: 1
  }

  return user.id_user ? <RoutesAuth /> : <RoutesGuest />
}

export default Routes;