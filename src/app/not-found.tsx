import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen flex-col">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <div className="mt-5 bg-neutral-800 p-4 rounded-md text-neutral-400 flex flex-col space-y-2 max-w-[400px]">
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
