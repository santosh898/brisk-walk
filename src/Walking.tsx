import { useEffect, useRef } from "preact/hooks";
import { isRunningSignal, stepCountSignal } from "./store";

const Walking = () => {
  const pace = stepCountSignal.value;

  const isRunning = isRunningSignal.value;

  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<number>();

  useEffect(() => {
    if (isRunning) {
      const audio = audioRef.current;
      if (!audio) return;
      intervalRef.current = setInterval(() => {
        audio.currentTime = 0;
        audio.play();
      }, (60 / pace) * 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning, pace]);

  return (
    <div>
      <button
        onClick={() => {
          isRunningSignal.value = !isRunningSignal.value;
        }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <audio src="/beepd.mp3" autoPlay={false} ref={audioRef} />
    </div>
  );
};

export default Walking;
