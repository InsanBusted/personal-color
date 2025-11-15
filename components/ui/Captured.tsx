"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Camera, ArrowLeft } from "lucide-react";
import Link from "next/link";
import OutlineFace from "@/public/basic/face-outline.png";

const Page = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");

    console.log("Captured Image:", imageData);
  };

  return (
    <div className="bg-main min-h-screen flex flex-col items-center justify-center p-4">
      <Link
        href="/basic/hint"
        className="fixed top-10 left-10 flex items-center gap-3 rounded-full p-2 hover:text-[#7D4754]"
      >
        <button className="bg-white hover:bg-[#7D4754] w-10 h-10 flex items-center justify-center rounded-full">
          <ArrowLeft size={20} />
        </button>
        <span className="font-semibold tracking-wide text-white">BACK</span>
      </Link>

      <div className="relative w-[420px] md:w-[520px] aspect-3/4 rounded-xl overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover scale-x-[-1]"
        />

        <Image
          src={OutlineFace}
          alt="outline"
          width={900}
          height={900}
          className="absolute inset-0 m-auto pointer-events-none scale-150"
        />

        <button
          onClick={handleCapture}
          className="
            absolute bottom-6 left-1/2 -translate-x-1/2
            w-20 h-20 bg-white/10 backdrop-blur-xl
            rounded-full border border-white/30
            flex items-center justify-center
            text-white hover:bg-white/20 transition cursor-pointer
          "
        >
          <Camera size={38} strokeWidth={1.5} />
        </button>

        <canvas ref={canvasRef} className="hidden" />
      </div>

      <p className="mt-6 text-white/80 font-medium text-sm">
        Please identify with natural bright light
      </p>
    </div>
  );
};

export default Page;
