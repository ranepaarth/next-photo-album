"use client";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const AlbumCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-start w-full gap-y-2">
          <Skeleton className="h-6 md:h-8 w-32" />
          <Skeleton className="h-3 md:h-5 w-full" />
          <Skeleton className="h-3 md:h-5 w-20" />
        </div>
      </CardHeader>

      <CardFooter>
        <Skeleton className="h-6 w-20 md:w-28" />
      </CardFooter>
    </Card>
  );
};

export default AlbumCardSkeleton;
