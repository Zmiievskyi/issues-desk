import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getDone, getTodo } from "../redux/operations/boardOperations";
import { Header } from "../components/header/Header";

export const SharedLayout = () => {
 

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
