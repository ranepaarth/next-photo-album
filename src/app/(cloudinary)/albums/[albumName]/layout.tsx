"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SingleAlbumPageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const arrayRoutes = pathname.split("/").filter((path) => path);
  console.log(arrayRoutes);
  let breadcrumbPath = "";

  return (
    <section>
      <div className="mb-5 text-neutral-400">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hover:text-accent-foreground hover:underline cursor-pointer">
              <Link href={"/"}>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {arrayRoutes.map((route, index) => {
              breadcrumbPath += `/${route}`;

              const isLastRoute = index === arrayRoutes.length - 1;

              console.log({ breadcrumbPath });

              return isLastRoute ? (
                <BreadcrumbItem key={breadcrumbPath}>{route}</BreadcrumbItem>
              ) : (
                <React.Fragment key={breadcrumbPath}>
                  <BreadcrumbItem className="hover:text-accent-foreground hover:underline cursor-pointer">
                    <Link href={breadcrumbPath}>{route}</Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default SingleAlbumPageLayout;
