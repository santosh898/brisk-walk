import { effect, signal } from "@preact/signals";

export const stepCountSignal = signal(
  Number(localStorage.getItem("step-count") ?? "120")
);

effect(() => localStorage.setItem("step-count", String(stepCountSignal.value)));

export const isRunningSignal = signal(false);
