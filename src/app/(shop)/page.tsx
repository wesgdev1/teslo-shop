import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>hola mundi</h1>
      <h1 className={`${titleFont.className} font-bold`}>hola mundo</h1>
      <h1 className={`${titleFont.className} `}>hola mundo</h1>
    </main>
  );
}
