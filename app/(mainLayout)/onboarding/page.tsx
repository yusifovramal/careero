import OnboardingForm from "@/components/forms/onboarding/onboarding-form";
import prisma from "@/lib/db";
import { requireUser } from "@/lib/requireUser";
import { redirect } from "next/navigation";

async function checkIfUserHasFinishedOnboarding(userId: string) {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      onboardingCompleted: true,
    },
  });

  if (user?.onboardingCompleted) {
    return redirect("/");
  }

  return user;
}

async function OnboardingPage() {
  const user = await requireUser();
  await checkIfUserHasFinishedOnboarding(user.id as string);

  return (
    <div className="min-h-screen py-10 flex flex-col items-center justify-center">
      <OnboardingForm />
    </div>
  );
}

export default OnboardingPage;
