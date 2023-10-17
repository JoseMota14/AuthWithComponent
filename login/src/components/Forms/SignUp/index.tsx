import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { state } from "..";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../Loading";
import { FormComponent } from "./styles";

export interface iLoginData {
  username: string;
  password: string;
  confirm_password: string;
}

export interface Props {
  handleChangeForm: React.Dispatch<React.SetStateAction<state>>;
}

export function CreateForm({ handleChangeForm }: Props) {
  const { signUp, loading } = useAuth();
  const { t } = useTranslation();
  const changeForm1 = () => {
    handleChangeForm("LOGIN");
  };

  const formSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirm_password: Yup.string()
      .required("Confirm Password")
      .required("Password is required")
      .oneOf([Yup.ref("password")], "As senhas não conferem!"),
  });

  type CreateUserFormData = Yup.InferType<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(formSchema),
  });

  async function onSubmitFuntion(data: any) {
    console.log(data);

    await signUp({ ...data });
  }

  return (
    <div>
      <FormComponent onSubmit={handleSubmit(onSubmitFuntion)}>
        <h2>{t("login:signup")}</h2>

        <input
          type="text"
          placeholder={t("login:username")}
          {...register("username")}
        />
        {errors.username?.message ? (
          <span>{errors.username.message}</span>
        ) : (
          <div></div>
        )}

        <input
          type="password"
          placeholder={t("login:createPassword")}
          {...register("password")}
        />
        {errors.password?.message ? (
          <span>{errors.password.message}</span>
        ) : (
          <div></div>
        )}

        <input
          type="password"
          placeholder={t("login:confirmPassword")}
          {...register("confirm_password")}
        />
        {errors.confirm_password?.message ? (
          <span>{errors.confirm_password.message}</span>
        ) : (
          <div></div>
        )}

        <button disabled={loading} type="submit">
          {loading ? <Loading /> : `Criar conta`}
        </button>

        <button type="button" onClick={changeForm1}>
          <span>{t("login:login")}</span>
        </button>
      </FormComponent>
    </div>
  );
}
