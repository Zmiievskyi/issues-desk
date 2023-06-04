import { RepoSearch } from "./RepoSearch";
import { useAppSelector } from "../../redux/hooks";
import { RepoDiscribe } from "./RepoDiscribe";
import { Container } from "react-bootstrap";

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
