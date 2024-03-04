import Admin from "./pages/Admin";
import Auth from "./pages/Auth/Auth.js";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import {
  LOGIN_ROUTE,
  ADMIN_ROUTE,
  DEVICE_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  BACKET_ROUTE,
} from "./utils/consts.js";
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BACKET_ROUTE,
    Component: Basket,
  },
];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
];
