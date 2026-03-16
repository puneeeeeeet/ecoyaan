import StepIndicator from "../../components/StepIndicator";


export default function SuccessPage() {

    return (
      <div className="text-center mt-20">
            <StepIndicator currentStep={4} />
        <h1 className="text-4xl font-bold text-green-600">
          🎉 Order Successful!
        </h1>
  
        <p className="mt-4">
          Thank you for shopping with Ecoyaan.
        </p>
  
      </div>
    );
  
  }