import Navbar from "./NavigationBar";
//@TODO: Better type for children
const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
