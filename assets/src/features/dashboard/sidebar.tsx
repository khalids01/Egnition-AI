import React from "react";
import { usePage } from "@inertiajs/react";
import { AppSidebar } from "@/features/dashboard/app-sidebar";
interface Props {
  slug?: string;
}

export const DashboardSidebar = ({ slug }: Props) => {
  const { url } = usePage();

  return (
    <>
        <AppSidebar />
    </>
  );
};
