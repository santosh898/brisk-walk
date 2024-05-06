import "./app.css";
import Walking from "./Walking";
import { isRunningSignal, stepCountSignal } from "./store";

const MIN = 80;
const MAX = 180;

export function App() {
  const stepCount = stepCountSignal.value;
  const isRunning = isRunningSignal.value;

  const modify = (byValue: number) => {
    stepCountSignal.value += byValue;
  };

  return (
    <div>
      <div className="step-count">{stepCount}</div>
      <div className="easy-counter">
        <button
          className="modify-button"
          disabled={isRunning || stepCount <= MIN}
          onClick={() => modify(-10)}
        >
          -
        </button>
        <button
          className="modify-button"
          disabled={isRunning || stepCount >= MAX}
          onClick={() => modify(+10)}
        >
          +
        </button>
      </div>
      <Walking />
    </div>
  );
}
