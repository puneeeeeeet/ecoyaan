"use client";

export default function StepIndicator({ currentStep }) {

  const steps = [
    { name: "Cart", step: 1 },
    { name: "Address", step: 2 },
    { name: "Payment", step: 3 },
    { name: "Success", step: 4 }
  ];

  return (
    <div className="flex justify-between items-center mb-8">

      {steps.map((item) => {

        const isActive = currentStep === item.step;
        const isCompleted = currentStep > item.step;

        return (

          <div
            key={item.step}
            className="flex flex-col items-center flex-1"
          >

            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2
              ${isActive ? "bg-green-600 text-white border-green-600"
                : isCompleted ? "bg-green-400 text-white border-green-400"
                : "border-gray-300 text-gray-400"
              }`}
            >
              {item.step}
            </div>

            <span
              className={`mt-2 text-sm
              ${isActive ? "text-green-600 font-semibold"
                : "text-gray-400"
              }`}
            >
              {item.name}
            </span>

          </div>

        );

      })}

    </div>
  );
}