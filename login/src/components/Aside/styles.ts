import styled from "styled-components";

interface iContainerProps {
  img: string;
}

export const Container = styled.div<iContainerProps>`
  width: 65%;
  height: 100%;
  max-height: 800px;
  background-color: ${({ theme }) => theme.colors.grey2};
  border-radius: 0 6px 6px 0;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-height: 800px;
  background-color: ${({ theme }) => theme.colors.primaryRGBA};
  border-radius: 0 6px 6px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: ${({ theme }) => theme.fonts.fSize1}rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.fSize2}rem;
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
  }
`;
