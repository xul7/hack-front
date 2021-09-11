import { Box, Button, Container as MuiContainer, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../App";
import { getIsAuthorized, logout } from "../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Container = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Main: React.FC = () => {
  const isAuthorized = useAppSelector(getIsAuthorized);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onLogoutHandler = () => {
    dispatch(logout());
    history.push(AppRoutes.AUTH);
  };
  const onCreateHandler = () => {
    history.push(AppRoutes.PLAN);
  };
  return (
    <Container>
      <Box>{isAuthorized ? "authorized" : "not authorized"}</Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" onClick={onLogoutHandler}>
            Выйти
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={onCreateHandler}>
            Создать
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
