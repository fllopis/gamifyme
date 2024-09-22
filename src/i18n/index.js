import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import localStorage from "../utils/localStorage.js";
import es from "./locales/es.json";
import en from "./locales/en.json";

//Resources with different translations
const resources = {
  "es": { translation: es },
  "en": { translation: en },
};

//Configuration of translations
const initI18n = async () => {
  let appLanguage = await localStorage.get("lang");

  if (!appLanguage) {
    localizationData = Localization.getLocales();
    appLanguage = localizationData[0].languageCode;

    //Storing the default language
    await localStorage.add(appLanguage, "lang", false);
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: appLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
