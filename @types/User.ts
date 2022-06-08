type languageObject = {
  alt_image: string;
  office: string;
  summary?: string[];
};

export type User = {
  logo: string;
  image: string;
  name: string;
  translate: {
    pt: languageObject;
    en: languageObject;
  };
};
