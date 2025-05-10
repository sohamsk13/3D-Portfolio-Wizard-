"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactLinks() {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 bg-black/50 backdrop-blur-md rounded-xl shadow-2xl max-w-2xl mx-auto mt-6 border border-yellow-500/30">
      <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 uppercase tracking-wider">
        Soham S Kulkarni
      </h1>
      <p className="text-sm md:text-base text-gray-200 mt-1">
        Pune, India{" "}
        <span className="text-yellow-300 font-medium">(Open to Relocation)</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-sm text-white">
        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
          <FaPhone className="text-yellow-400" />
          <span>9423446043</span>
        </div>

        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
          <FaEnvelope className="text-yellow-400" />
          <a
            href="mailto:sohamkulkarni1340@gmail.com"
            className="hover:underline"
          >
            sohamkulkarni1340@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
          <FaLinkedin className="text-yellow-400" />
          <a
            href="https://www.linkedin.com/in/soham-kulkarni-63b6b3250"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            /soham-kulkarni
          </a>
        </div>

        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
          <FaGithub className="text-yellow-400" />
          <a
            href="https://github.com/sohamsk13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @sohamsk13
          </a>
        </div>
      </div>
    </div>
  );
}
