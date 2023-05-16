import styled from "styled-components";
// import { SideBar } from "../Components/SideBar";
// import { Header } from "../Components/Header";
import { Search } from "./Search";

const HeaderWrap = styled.div`
  display: flex;
`;


export const Header = ({title}:any) => {


  return (
    <HeaderWrap>
      {/* <header>{title}</header> */}
      <Search />
    </HeaderWrap>
  );
};
