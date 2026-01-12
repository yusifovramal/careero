import prisma from "@/lib/db";
import { notFound } from "next/navigation";

async function getJob(jobId: string) {
  const jobData = await prisma.jobPost.findUnique({
    where: {
      id: jobId,
      status: "ACTIVE",
    },
    select: {
      jobTitle: true,
      jobDescription: true,

      location: true,

      employmentType: true,
      benefits: true,

      createdAt: true,
      listingDuration: true,
      company: {
        select: {
          name: true,
          logo: true,
          location: true,
          about: true,
        },
      },
    },
  });

  if (!jobData) return notFound();
}

async function Job() {

  return (
    <div className="container mx-auto py-8">
 
    </div>
  );
}

export default Job;
