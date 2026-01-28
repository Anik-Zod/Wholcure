'use client';

import { createContext, useContext, useState } from 'react';

type ModalContextType = {
  isModalOpen: boolean;
  position: string;
  openModal: (position: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState('');

  const openModal = (pos: string) => {
    setPosition(pos);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPosition('');
    document.body.style.overflow = '';
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, position, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
