import * as React from "react";

import { Container, CssBaseline, Typography } from "@material-ui/core";

import { ThemeProvider } from "@material-ui/styles";
import { hot } from "react-hot-loader";
import reactLogo from "./react_logo.svg";
import { styles } from "./styles";
import { theme } from "../../properties";

declare let module: object;

export const AppContainer: React.SFC = hot(module)(() => {
  const classes = styles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.app}>
        <Typography variant="h1" align="center">
          Hello
        </Typography>
        <Typography align="center">Foo to the barz</Typography>
        <img src={reactLogo} height="480" alt="react-logo" />
      </Container>
    </ThemeProvider>
  );
});
