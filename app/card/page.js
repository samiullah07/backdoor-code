"use client";
import React, { useRef, useState } from "react";
import Wizard1 from "../components/Wizard1";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "/transitions.module.css";
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
  // Changed from card to Card
  const [currentStep, setCurrentStep] = useState(0);
  const [inProp, setInProp] = useState(true);

  const nextStep = () => {
    setInProp(false);
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      setInProp(true);
    }, 300); // Match the transition duration
  };

  const previousStep = () => {
    setInProp(false);
    setTimeout(() => {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
      setInProp(true);
    }, 300); // Match the transition duration
  };

  const CurrentComponent = steps[currentStep].component;
  return (
    <div className="container-card px-1">
      <div className="w-[100%] md:flex justify-center">
        <CSSTransition
          in={inProp}
          timeout={300}
          classNames="fade"
          key={steps[currentStep].id}
          unmountOnExit
        >
          <div>
            <CurrentComponent next={nextStep} previous={previousStep} />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Card; // Changed from card to Card
