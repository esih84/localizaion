import { Locale } from "../../../../i18n.config";
import { getDictionary } from "../dictionary";

const AboutUs = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1 className=" text-3xl">{dictionary.pages["about-us"].title}</h1>
    </div>
  );
};

export default AboutUs;
