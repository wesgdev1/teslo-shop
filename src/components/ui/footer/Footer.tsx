import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href={"/"}>
        <span>Teslo</span>
        <span>| Shop </span>
        <span>@{new Date().getFullYear()}</span>
      </Link>
    </div>
  );
};
