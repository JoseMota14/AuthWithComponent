import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import Form from "./Forms";
import GlobalStyle from "./global";
import { Container } from "./styles";
import { theme } from "./theme";

interface Props {
  title: string;
  description: string;
}

export default function Login({ title, description }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form></Form>
      </Container>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}
