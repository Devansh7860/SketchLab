// THE PURPOSE OF THIS FILE IS TO PROVIDE A MODAL CONTEXT THAT CAN BE USED ACROSS THE APPLICATION.
// IT ENSURES THAT MODALS ARE ONLY RENDERED ON THE CLIENT SIDE TO AVOID SSR ISSUES.
// THIS FILE CURRENTLY INCLUDES A RENAME MODAL, BUT CAN BE EXTENDED TO INCLUDE MORE MODALS AS NEEDED.
// A MODAL IS BASICALLY A POP-UP DIALOG THAT REQUIRES USER INTERACTION. 

"use client";

import { useEffect, useState } from "react";

import { RenameModal } from "@/components/modals/rename-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <RenameModal />
    </>
  );
};