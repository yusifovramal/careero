import JobFilter from "@/components/common/job-filter";

function Home() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilter />
      <div className="col-span-2 flex flex-col gap-6">
        g
      </div>
    </div>
  );
}

export default Home