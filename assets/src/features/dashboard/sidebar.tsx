import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Calendar,
  ChevronsUpDown,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useForm, usePage } from "@inertiajs/react";
import { CurrentUser } from "@/types";
import { Logo } from "@/components/logo";
import {
  IconAutomation,
  IconHelp,
  IconLayoutDashboard,
  IconLogout,
  IconRocket,
} from "@tabler/icons-react";
import { endpoints } from "@/constants/endpoints";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { cn } from "@/lib/utils";

interface Props {
  slug?: string;
}
const items = [
  {
    title: "Dashboard",
    url: endpoints.pages.dashboard,
    icon: IconLayoutDashboard,
  },
  {
    title: "Automations",
    url: "#",
    icon: IconAutomation,
  },
  {
    title: "Integrations",
    url: "#",
    icon: IconRocket,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help",
    url: "#",
    icon: IconHelp,
  },
];
export const DashboardSidebar = ({ slug }: Props) => {
  return (
    <Sidebar collapsible="icon">
      <Header />
      <Content />
      <Footer />
      <SidebarRail />
    </Sidebar>
  );
};

function Header() {
  return (
    <>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Logo showText={false} />
          <span>
            <Logo showIcon={false} />
          </span>
        </SidebarMenuButton>
      </SidebarHeader>
    </>
  );
}
function Content() {
  const { url } = usePage();
  const { open } = useSidebar();

  return (
    <SidebarContent>
      <SidebarGroupContent className={"px-2.5"}>
        <SidebarMenu className={cn(open ? "gap-0" : "gap-2")}>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                size={"lg"}
                className={cn(
                  "py-0 h-12",
                  open && url === item.url
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "",
                )}
              >
                <a href={item.url}>
                  <span className="text-primary">
                    <item.icon size={open ? 20 : 22} />
                  </span>
                  <span
                    className={cn(
                      "ml-1",
                      url === item.url ? "logo-text font-bold" : ""
                    )}
                  >
                    {item.title}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
  );
}
function Footer() {
  const { props } = usePage();
  const user = (props?.current_user as CurrentUser) || null;

  const { delete: logout } = useForm();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent bg-secondary data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                  <AvatarFallback className="rounded-lg bg-secondary">
                    {user.name?.substring(0, 1)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user?.name}</span>
                  <span className="truncate text-xs">{user?.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-60 px-1">
              <DropdownMenuItem className="flex items-center justify-between">
                <span>Theme Switch</span>
                <ThemeSwitch type="switch" size="sm" />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="py-3 "
                onClick={() => {
                  logout(endpoints.api.logout);
                }}
              >
                <IconLogout />
                <span>Log out</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 cursor-pointer" asChild>
                <Link href="#">
                  <div className="w-full rounded-lg dark:bg-accent/50 bg-accent p-3 ">
                    <div className="text-sm font-medium">
                      Upgrade to{" "}
                      <span className="text-purple-400">Smart AI</span>
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">
                      Unlock all features including AI and more
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
