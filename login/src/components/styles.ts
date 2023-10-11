import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: block;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 75%;
  height: 90%;
  max-width: 1200px;
  max-height: 800px;
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
`;
