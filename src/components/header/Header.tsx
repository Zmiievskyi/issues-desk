import { RepoSearch } from "./RepoSearch";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { RepoDiscribe } from "./RepoDiscribe";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { setRepository } from "../../redux/operations/repOperations";

export const Header = () => {
  const repoRef: any = useAppSelector((state) => state.repo.repository);

  return (
    <header>
      <Container className="d-flex flex-column p-0">
        <RepoSearch />
        {repoRef.data.full_name && <RepoDiscribe repo={repoRef.data} />}
      </Container>
    </header>
  );
};
