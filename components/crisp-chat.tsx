"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3644d8f8-59f8-46ca-b8eb-347137fd4e31");
  }, []);

  return null;
};