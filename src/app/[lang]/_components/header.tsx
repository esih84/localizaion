"use client";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { Locale } from "../../../../i18n.config";
import { usePathname } from "next/navigation";

const Header = ({ dictionary }: { dictionary: Record<string, any> }) => {
  const pathName = usePathname();
  const redirectedPathName = (name: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[2] = name;
    return segments.join("/");
  };
  return (
    <nav className=" py-6  justify-between  flex flex-row px-4 w-full ">
      <LocaleSwitcher dictionary={dictionary.components["locale-switcher"]} />
      <div className=" flex flex-row justify-evenly gap-5 px-6 text-2xl text-slate-600">
        <Link href={redirectedPathName("/")}>{dictionary.navbar.home}</Link>
        <Link href={redirectedPathName("/about-us")}>
          {dictionary.navbar["about-us"]}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
