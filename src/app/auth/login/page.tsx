import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <h1 className={`${titleFont.className} font-bold`}>hola mundo</h1>
      <h1 className={`${titleFont.className} `}>hola mundo</h1>
    </div>
  );
}
