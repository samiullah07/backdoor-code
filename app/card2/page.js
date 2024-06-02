"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wizard1 from "../components/Wizard1";
import Wizard2 from "../components/Wizard2";
import Wizard3 from "../components/Wizard3";
import Wizard4 from "../components/Wizard4";
import Wizard5 from "../components/Wizard5";
import Wizard6 from "../components/Wizard6";
import { GoDot, GoDotFill } from "react-icons/go";

const steps = [
  { id: 1, component: Wizard1 },
  { id: 2, component: Wizard2 },
  { id: 3, component: Wizard3 },
  { id: 4, component: Wizard4 },
  { id: 5, component: Wizard5 },
  { id: 6, component: Wizard6 },
];

function Page() {
  const [step, setStep] = useState(1);

  const next = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const previous = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderWizard = () => {
    const CurrentWizard = steps.find((s) => s.id === step).component;
    return <CurrentWizard next={next} previous={previous} />;
  };
  return (
    <div>
      <div className="container-card px-1 ">
        <div className="w-[100%] md:w-[800px] h-[530px] bg-zinc-900 rounded-md pt-6 relative ">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {renderWizard()}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center absolute bottom-6 w-[100%] transition">
            {step >= 2 && 5 >= step && (
              <motion.div
                key={step}
                initial={step === 2 && { opacity: 1, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex gap-1">
                  <>
                    {step === 2 ? (
                      <GoDotFill className="cursor-pointer transition" />
                    ) : (
                      <GoDot className="cursor-pointer transition" />
                    )}
                    {step === 3 ? (
                      <GoDotFill className="cursor-pointer transition" />
                    ) : (
                      <GoDot className="cursor-pointer transition" />
                    )}
                    {step === 4 ? (
                      <GoDotFill className="cursor-pointer transition" />
                    ) : (
                      <GoDot className="cursor-pointer transition" />
                    )}
                    {step === 5 ? (
                      <GoDotFill className="cursor-pointer transition" />
                    ) : (
                      <GoDot className="cursor-pointer transition" />
                    )}
                  </>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
