"use client";

import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
import UserTypeSelection from "./user-type-form";
import CompanyForm from "./company-form";

type UserType = "company" | "jobSeeker" | null;

function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>(null);

  function handleUserTypeSelection(type: UserType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserTypeSelection} />;
      case 2:
        return userType === "company" ? <CompanyForm /> : null;
      default:
        return <p>Unknown step</p>;
    }
  }

  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <Image src={Logo} alt="JobMarshal Logo" width={50} height={50} />
        <span className="text-4xl font-bold">Careero</span>
      </div>
      <Card className="w-full max-w-lg">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
}

export default OnboardingForm;
