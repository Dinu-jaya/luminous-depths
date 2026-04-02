import { useEffect, useRef } from "react";

const TorchCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-[60px] h-[60px] rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height] duration-200"
      style={{
        background:
          "radial-gradient(circle, hsla(160,100%,75%,0.18) 0%, hsla(165,100%,50%,0.06) 50%, transparent 70%)",
        border: "1px solid hsla(160,100%,75%,0.25)",
      }}
    />
  );
};

export default TorchCursor;
