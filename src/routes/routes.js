import { useContext } from "react";
import RoutesAuth from "./routesAuth";
import RoutesGuest from "./routesGuest";
import { AuthContext } from "../contexts/auth";

const Routes = () => {

  const { user } = useContext(AuthContext);
  return user.id_user ? <RoutesAuth /> : <RoutesGuest />
}

export default Routes;