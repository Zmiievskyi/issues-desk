import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/header/Header";

const GridWrapper = styled.div`
  /* display: grid; */
  /* grid-template-rows: 1fr 25fr; */
  /* height: 95vh; */
  /* grid-template:
    "h" 56px
    "m" 1fr */
`;

const GridHeader = styled.div`
  background-color: #ffffff;
`;

const GridMain = styled.div`
  height: 100%;
  background-color: #ffffff;
`;


const Container = styled.div`
  width: 100%;
  padding: 0;
`

export const Layout = () => {


  return (
    <Container>
      <GridWrapper>
        <GridHeader>
          <Header />
        </GridHeader>
        <GridMain>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </GridMain>
      </GridWrapper>
    </Container>
  );
};
