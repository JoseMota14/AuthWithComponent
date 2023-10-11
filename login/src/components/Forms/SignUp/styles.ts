import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  max-height: 800px;
  border-radius: 6px 0 0 6px;
`;

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
    margin-bottom: 2.5rem;
  }

  section {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    justify-content: flex-start !important;
    text-align: left !important;
    margin-top: 0.5rem;
  }

  label {
    font-size: ${({ theme }) => theme.fonts.fSize4}rem;
    font-weight: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.grey2};
  }

  input[type="checkbox"] {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.8rem;
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 0.6rem 0.7rem;
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
    padding: 0.688rem 0;
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
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 2.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
  padding: 0.7rem;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.fSize4}rem;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.grey1};
  position: relative;
  -webkit-transition-duration: 0.6s; /* Safari */
  transition-duration: 0.6s;
  text-decoration: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBack};
  }

  &:after {
    content: "";
    background-color: ${({ theme }) => theme.colors.primaryRGBA};
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: none;
  margin: 0 auto;
  margin-top: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.fSize5}rem;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.grey2};

  span {
    display: inline;
    font-size: ${({ theme }) => theme.fonts.fSize5}rem;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.grey4};
  }
`;

export const ButtonForget = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.fSize5}rem;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
