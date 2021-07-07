import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
      return (
            <BrowserRouter>
                <Nav
                    activeKey="/"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    className="col-12 bg-danger"
                    >
                    <Nav.Item>
                        <Link className="nav-link text-light" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link text-light" to="/one">Profile</Link>
                    </Nav.Item>
                </Nav>
                <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/one" component={Profile} />
                </Switch>
            </BrowserRouter>
      );
};

export default Navbar;