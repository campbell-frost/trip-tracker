import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center justify-center">
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
