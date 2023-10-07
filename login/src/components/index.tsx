import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Aside } from "./Aside";
import Form from "./Forms";
import LanguageSwitcher from "./Language";
import GlobalStyle from "./global";
import { Container, Content } from "./styles";
import { theme } from "./theme";

interface Props {
  title: string;
  description: string;
}

export default function Login({ title, description }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <LanguageSwitcher />
      <Container>
        <Form></Form>
        <Content>
          <Aside tile={title} description={description} />
        </Content>
      </Container>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}
