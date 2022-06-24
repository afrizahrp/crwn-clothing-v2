import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Nsolutionslogo } from "../../assets/nsolutions-3colors-xs-lastest.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Nsolutionslogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/authentication">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
