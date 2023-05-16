import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../Components/Header";
import { Search } from "../Components/Search";

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
  /* grid-area: h; */
`;

const GridMain = styled.div`
  height: 100%;
  background-color: #ffffff;
  /* grid-area: m; */
`;


const Container = styled.div`
  width: 100%;
  /* height: 98vh; */
  padding: 0;
`

export const Layout = () => {
  const [title, setTitle] = useState("Wallet");


  return (
    <Container>
      <GridWrapper>
        <GridHeader>
          <Header title={"Header"} />
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
