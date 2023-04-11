import React, { useEffect, useRef } from "react";
import Sw from "../Assets/sw.mp3";

export const Audio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.autoPlay = true;
    }
  }, []);

  return (
    <aside className="c-audio">
      <audio controls ref={audioRef}>
        <source src={Sw} type="audio/mpeg" />
        Seu navegador não suporta a tag de áudio.
      </audio>
    </aside>
  );
};
