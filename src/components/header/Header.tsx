import { RepoSearch } from "./RepoSearch";
import { useAppSelector } from "../../redux/hooks";
import { RepoDiscribe } from "./RepoDiscribe";
import { Container } from "react-bootstrap";

export const Header = () => {
  const repo:any = useAppSelector((state) => state.repo.repository);

  return (
    <>
      <Container className="d-flex flex-column p-0">
        <RepoSearch />
        {repo.id && <RepoDiscribe repo={repo} />}
      </Container>
      
    </>
  );
};
