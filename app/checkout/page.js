import AddressForm from "../../components/AddressForm";
import StepIndicator from "../../components/StepIndicator";


export default function CheckoutPage() {
  return (
    <div>
      <StepIndicator currentStep={2} />

      <h1 className="text-3xl font-bold mb-6">
        Shipping Address
      </h1>

      <AddressForm />

    </div>
  );
}