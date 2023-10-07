import { useState } from "react";
import { useTranslation } from "react-i18next";
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
    <div>
      <button onClick={handleChangeLanguage}>English</button>
      <button onClick={handleChangeLanguage}>Portuguese</button>
    </div>
  );
}
