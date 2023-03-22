import React from "react";
import { Container } from "./style/Share";
import { ThemeProvider } from "styled-components";
import { GolbalCss } from "./style/GlobalCss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components /Home";
import Login from "./components /Login";
import LoginProvider from "./LoginProvider";
import RouteGuard from "./Helper/RouteGuard";
function App() {
  const theme = {
    color: {
      primary: "aliceblue",
      secondary: "blue",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GolbalCss />
      <Container>
        <LoginProvider>
          <Router>
            <Routes>
              <Route
                path="/home"
                element={
                  <RouteGuard>
                    <Home />
                  </RouteGuard>
                }
              />
              <Route path="/" element={<Login />} />
            </Routes>
          </Router>
        </LoginProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
