import { type Locale } from "../../../i18n.config";
import { getDictionary } from "./dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <h1 className=" text-3xl">{dictionary.pages.homePage.title}</h1>
    </main>
  );
}
