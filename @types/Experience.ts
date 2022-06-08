type languageObject = {
  title: string;
  description: string[];
};

export type Experience = {
  company: string;
  translate: {
    pt: languageObject;
    en: languageObject;
  };
};
