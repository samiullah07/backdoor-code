"use client";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./transitions.css"; // Import the CSS module
import Wizard1 from "../components/Wizard1";
import Wizard2 from "../components/Wizard2";
import Wizard3 from "../components/Wizard3";
import Wizard4 from "../components/Wizard4";
import Wizard5 from "../components/Wizard5";
import Wizard6 from "../components/Wizard6";

const steps = [
  { id: 1, component: Wizard1 },
  { id: 2, component: Wizard2 },
  { id: 3, component: Wizard3 },
  { id: 4, component: Wizard4 },
  { id: 5, component: Wizard5 },
  { id: 6, component: Wizard6 },
];

function Card() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inProp, setInProp] = useState(true);

  const nextStep = () => {
    setInProp(false);
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      setInProp(true);
    }, 800); // Match the transition duration
  };

  const previousStep = () => {
    setInProp(false);
    setTimeout(() => {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
      setInProp(true);
    }, 800); // Match the transition duration
  };

  const CurrentComponent = steps[currentStep].component;
  return (
    <div className="container-card px-1">
      <div className="w-[100%] md:flex justify-center">
        <CSSTransition
          in={inProp}
          timeout={789}
          classNames={{
            enter: styles["fade-enter"],
            enterActive: styles["fade-enter-active"],
            exit: styles["fade-exit"],
            exitActive: styles["fade-exit-active"],
          }}
          key={steps[currentStep].id}
          unmountOnExit
        >
          <div className="w-[100%] md:w-[800px] h-[530px] bg-zinc-900 rounded-md pt-6 ">
            <CurrentComponent next={nextStep} previous={previousStep} />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Card;
