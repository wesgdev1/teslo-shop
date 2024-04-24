"use client";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPerson,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div>
      {/* Background black */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      {/* Blur */}
      <div className="fade-in fixed top-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
      {/* Menu */}
      <nav className="fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl tranform transition-all duration-300">
        <IoCloseOutline
          width={50}
          onClick={() => {
            console.log("Close sidebar");
          }}
          className="absolute top-5 right-5 cursor-pointer"
        />
        <div className="relative mt-14">
          {/* Input de busqueda */}
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-gray-50 rounded pl-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-gray-400 transition-all duration-300"
          />
        </div>

        {/* menu */}
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>

        <div className="w-full h-px bg-gray-200 my-10"></div>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all"
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 transition-all"
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
