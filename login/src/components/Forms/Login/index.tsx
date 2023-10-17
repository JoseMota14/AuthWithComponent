import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { state } from "..";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Loading";
import { Flex, FormComponent } from "./styles";

export interface iFormProps {
  handleChangeForm: React.Dispatch<React.SetStateAction<state>>;
}

export function LoginForm({ handleChangeForm }: iFormProps) {
  const { login, loading } = useAuth();
  const { t } = useTranslation();
  const handleChangePassword = () => {
    handleChangeForm("CHANGE");
  };

  const handleCreateAccount = () => {
    handleChangeForm("SIGNUP");
  };

  const handleRecoverAccount = () => {
    handleChangeForm("RESET");
  };

  const formSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  type CreateUserFormData = Yup.InferType<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(formSchema), // Use yupResolver
  });

  async function onSubmitFuntion(data: any) {
    await login({ ...data });
    reset();
  }

  return (
    <div>
      <FormComponent onSubmit={handleSubmit(onSubmitFuntion)}>
        <h2>{t("login:login")}</h2>
        <input type="text" placeholder="Utilizador" {...register("username")} />
        {errors.username?.message ? (
          <span>{errors.username.message}</span>
        ) : (
          <div></div>
        )}
        <input
          type="password"
          placeholder="Palavra-Passe"
          {...register("password")}
        />
        {errors.password?.message ? (
          <span>{errors.password.message}</span>
        ) : (
          <div></div>
        )}
        <button type="button" onClick={handleRecoverAccount}>
          {t("login:recover")}
        </button>
        <button disabled={loading} type="submit">
          {loading ? <Loading /> : `Iniciar sessão`}
        </button>
        <Flex>
          <button type="button" onClick={handleCreateAccount}>
            <span>{t("login:signup")}</span>
          </button>
          <button type="button" onClick={handleChangePassword}>
            <span>{t("login:changePassword")}</span>
          </button>
        </Flex>
      </FormComponent>
    </div>
  );
}
