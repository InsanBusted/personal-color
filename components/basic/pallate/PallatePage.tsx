"use client";

import { useState } from "react";
import PreviewComponent from "@/components/basic/Preview";
import { useRouter } from "next/navigation";

const PallatePage = () => {
  const [capturedImg, setCapturedImg] = useState<string | null>(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("captured-image")
      : null
  );

  const router = useRouter();

  const handleRetake = () => {
    router.push("/basic/captured");
  };

  if (!capturedImg) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-main text-white">
        <p>No image found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-main"></div>
  );
};

export default PallatePage;
