import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setStep(1);
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>

      {step === 1 && (
        <div>
          <h2>Step 1: Profile</h2>
          <input 
            type="text" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
          />
          <br />
          <button onClick={nextStep} disabled={!firstName || !lastName}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Contact </h2>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Number" 
            value={number}
            onChange={(e) => setNumber(e.target.value)} 
          />
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep} disabled={!email || !number}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Review </h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Number: {number}</p>
          <button onClick={prevStep}>Back</button>
          <button onClick={resetForm}>Submit & Reset</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
