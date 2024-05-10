"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

// A small hack. Not ta preferred way to keep data in sync with cloudinary
const ForceRefresh = () => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return <></>;
};

export default ForceRefresh;
