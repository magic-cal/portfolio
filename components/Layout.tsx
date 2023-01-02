import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

//@TODO: Better type for children

const Layout = (props: any) => {
  return (
    <>
      {/* <Navbar /> */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <ColorModeContext.Provider value={{ darkMode, setDarkMode }}> */}
        {props.children}
        {/* </ColorModeContext.Provider> */}
        {/* Temporary footer space */}
        <br />
        <br />
        <br />
      </ThemeProvider>
    </>
  );
};

export default Layout;
