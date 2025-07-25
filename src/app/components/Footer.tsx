import React from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-100 text-black py-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Entre em Contato
          </h3>
          <p className="text-lg mt-2">
            Agende seu horário ou tire suas dúvidas!
          </p>
        </div>

        {/* Informações de Contato */}
        <div className="mb-6">
          <p className="text-lg">Telefone: (11) 96150-5256</p>
          <p className="text-lg">Email: melissagomes721@gmail.com</p>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 mt-4 text-2xl  ">
          <Link
            href="https://www.instagram.com/meel_makeeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <FaInstagram />
          </Link>
          {/* <Link href="https://www.facebook.com/seuperfil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
    <FaFacebook />
  </Link> */}
          <Link
            href="https://wa.me/5511961505256?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20maquiagem%20ou%20extens%C3%A3o%20de%20c%C3%ADlios."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <FaWhatsapp />
          </Link>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-6">
          <p className="text-sm text-gray-800">
         Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Desenvolvido por <strong>Eberson Silva</strong></p>
        </div>
      </div>
    </footer>
  );
};
