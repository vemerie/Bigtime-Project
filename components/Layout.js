// components/Layout.js

import Header from "./Header";
import NavBar from "./NavBar";
import useSticky from "../hooks/useSticky"



const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  margin:"0px",
  padding:"0px"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => {
  return(<div className="Layout" style={layoutStyle}>
    <div className="Content"  style={contentStyle}>
      {props.children}
    </div>
  </div>)
};

export default Layout;