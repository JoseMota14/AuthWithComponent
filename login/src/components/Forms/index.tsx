import { useState } from "react";
import { Container } from "../styles";
import { LoginForm } from "./Login";
import { CreateForm } from "./SignUp";

export type state = "LOGIN" | "SIGNUP" | "CHANGE" | "RESET";

export default function Form() {
  const [form, setForm] = useState<state>("LOGIN");

  return (
    <Container>
      {form === "LOGIN" ? (
        <LoginForm handleChangeForm={setForm} />
      ) : form === "SIGNUP" ? (
        <CreateForm handleChangeForm={setForm} />
      ) : form === "CHANGE" ? (
        <div>change</div>
      ) : (
        <div>reset</div>
      )}
    </Container>
  );
}
