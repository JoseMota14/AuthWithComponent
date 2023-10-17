import styled from "styled-components";

export const FormComponent = styled.form`
  width: 500px;
  height: 100%;
  max-height: 800px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 2.625rem 1.375rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: 100%;
    padding: 0.08rem;
    font-size: ${({ theme }) => theme.fonts.fSize6}rem;
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.negative};
    display: block;
    text-align: left;
  }

  div {
    width: 100%;
    padding: 0.5rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.fSize21}rem;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.grey2};
    margin: 0 auto;
    margin-bottom: 2rem;

    @media (max-height: 400px) {
      margin-bottom: 1rem;
    }
  }

  section {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    justify-content: flex-start !important;
    text-align: left !important;
  }

  label {
    font-size: ${({ theme }) => theme.fonts.fSize5}rem;
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.grey2};
  }

  input[type="checkbox"] {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.3rem;
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 0.5rem 0.2rem;
    margin-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
    outline: none;
    caret-color: ${({ theme }) => theme.colors.primaryRGBA};
    font-size: ${({ theme }) => theme.fonts.fSize4}rem;
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.grey3};
    transition: all 0.6s ease;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey2};
    }

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryRGBA};
    }
  }

  select {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
    outline: none;
    font-size: ${({ theme }) => theme.fonts.fSize4}rem;
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.grey2};
    transition: all 0.6s ease;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey2};
    }

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryRGBA};
    }

    &::selection {
      color: ${({ theme }) => theme.colors.grey2};
    }

    option {
      font-size: ${({ theme }) => theme.fonts.fSize5}rem;
      font-weight: ${({ theme }) => theme.fonts.regular};
      color: ${({ theme }) => theme.colors.grey2};
    }
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
