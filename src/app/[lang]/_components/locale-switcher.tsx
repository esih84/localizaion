"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n.config";
import { useState } from "react";

export default function LocaleSwitcher({
  dictionary,
}: {
  dictionary: Record<string, string>;
}) {
  const pathName = usePathname();
  const segments = pathName.split("/");
  const [language, setLanguage] = useState(segments[1]);
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <ul className=" flex  gap-4">
      {i18n.locales.map((locale) => {
        return (
          <li
            className={
              language === locale
                ? " bg-slate-600 text-xl text-white px-2 py-1 rounded"
                : "px-2 py-1 text-xl text-slate-600"
            }
            key={locale}
          >
            <Link href={redirectedPathName(locale)}>
              <span onClick={() => setLanguage(locale)}>
                {dictionary[locale]}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
