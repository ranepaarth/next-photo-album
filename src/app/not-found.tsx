import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-4xl font-bold">Not Found</h2>
      <div className="mt-5 bg-slate-800 p-4 rounded-md text-slate-400 flex flex-col space-y-2 max-w-[400px]">
        <p className="text-sm">Could not find requested resource</p>
        <Link href="/gallery">
          <Button variant={"default"} size={"sm"}>
            Go to Gallery
          </Button>
        </Link>
      </div>
    </div>
  );
}
