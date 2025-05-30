import React, { useEffect, useRef } from "react";

export default function CustomCursorBox() {
  const cursorRef = useRef(null); // This tracks the fake cursor

  useEffect(() => {
    const cursor = cursorRef.current;
    const box = document.getElementById("hover-box");

    const move = (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    box.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
      document.addEventListener("mousemove", move);
    });

    box.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
      document.removeEventListener("mousemove", move);
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      id="hover-box"
      className="relative w-80 h-80 bg-gray-200 rounded-xl flex items-center justify-center cursor-none">
      <p className="text-lg font-bold">Hover over this box</p>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 bg-orange-500/70 rounded-xl pointer-events-none z-[9999] transition-all duration-150 ease-out hidden"
        style={{ transform: "translate(-50%, -50%)" }}></div>
    </div>
  );
}
