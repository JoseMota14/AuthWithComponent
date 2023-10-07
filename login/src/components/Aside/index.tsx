import { Container, Content } from "./styles";

export interface iAsideProps {
  tile: string;
  description: string;
}

export function Aside({ tile, description }: iAsideProps) {
  return (
    <Container
      img={
        "https://igfej.justica.gov.pt/Portals/8/Images/JusticaGovPtNews/20200924_DUC_unsplash.jpg?ver=z3QJ0pC2q2aH7h6cGDB1dg%3d%3d"
      }
    >
      <Content>
        <h2>{tile}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
}
