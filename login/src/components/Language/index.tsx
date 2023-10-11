import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";

export default function LanguageSwitcher() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";

    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <Container>
      <button onClick={handleChangeLanguage}>English</button>
      <button onClick={handleChangeLanguage}>Portuguese</button>
    </Container>
  );
}
