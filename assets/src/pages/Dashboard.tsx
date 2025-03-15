// assets/js/pages/Dashboard.jsx
import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  message: string;
}

export default function Dashboard({ title, message }: Props) {
  return (
    <div className="bg-secondary m-16">
     <Button >{title}</Button> 
    </div>
  );
}
