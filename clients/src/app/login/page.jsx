"use client";
import { useState } from "react";
import { Login } from "@/components/Login";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/Loading";

const jumper = [Login, Loading];

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const StepComponents = jumper[step];

  const continueHandler1 = () => {
    setStep((prev) => prev + 1);
    return;
  };
  return (
    <div>
      <StepComponents jump={continueHandler1} />
    </div>
  );
}
