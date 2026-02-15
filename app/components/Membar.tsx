import { SocialMidea } from '@/types';
import React from 'react';

type SocialMedia = {
  icon: React.ReactNode; 
  link: string;
};



export function Membar({ name, socialMedia, photo, role }: SocialMidea) {
  return (
    <div className="relative max-w-100 w-full  h-96 rounded-3xl overflow-hidden group bg-gray-900 shadow-2xl">
      {/* Profile Image */}
      <img
        src={photo}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Info Area */}
      <div className="absolute bottom-0 p-6 w-full">
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{role}</p>

        {/* Social Icons Container */}
        <div className="flex gap-4">
          {socialMedia?.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              className="text-white/70 hover:text-white transition-colors"
            >
              <div className="size-7">
                 <i className={`fab fa-${social?.name}`}></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}