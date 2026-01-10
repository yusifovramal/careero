import { inngest } from "@/lib/ingest/client";
import { handleJobExpiration, helloWorld, sendPeriodicJobListings } from "@/lib/ingest/function";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld, handleJobExpiration, sendPeriodicJobListings],
});
