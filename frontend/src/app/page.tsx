"use client";

import { useEffect, useRef } from "react";
import SearchEnginePage from "./components/searchEngine";
import Header from "./components/header";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const noise = () => {
      const imageData = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(imageData.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.08) buffer32[i] = 0xffc0c0c0;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      noise();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#101010] to-[#131829]" />
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10"
        />
      </div>
      <div className="relative z-10">
        <Header />
        <SearchEnginePage />
      </div>
    </>
  );
}
