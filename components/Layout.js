// components/Layout.js

import Header from "./Header";

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

const Layout = props => (
  <div className="Layout" style={layoutStyle}>

    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
  </div>
);

export default Layout;