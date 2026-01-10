import JobFilter from "@/components/common/job-filter";
import JobListings from "@/components/common/job-listings";

function Home() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilter />
      <div className="col-span-2 flex flex-col gap-6">
        <JobListings />
      </div>
    </div>
  );
}

export default Home;
