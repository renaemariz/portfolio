"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type PortalProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  const [portalRoot] = useState<Element | null>(document.body);

  useEffect(() => {}, []);

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};
