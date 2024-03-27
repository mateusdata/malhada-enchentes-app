import React, { useContext } from "react";
import PublicRoutes from "./public/publicRoutes";
import PrivateRoutes from "./private/privateRoutes";


const Routes = () => {
  //const { user } = useContext(Context);
  //return false ? <PrivateRoutes /> :< PublicRoutes/> ;
  return < PublicRoutes/> ;
};

export default Routes;