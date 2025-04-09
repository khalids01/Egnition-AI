import React from "react";
import { Button } from "@/components/ui/button";
import { Link, usePage, useForm } from "@inertiajs/react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { endpoints } from "@/constants/endpoints";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconLayoutDashboard,
  IconLogout,
  IconSettings,
  IconUser,
  IconUserHexagon,
} from "@tabler/icons-react";
import { CurrentUser } from "@/types";
import { Logo } from "@/components/logo";

export function Header() {
  const { props } = usePage();
  const user = props?.current_user || null;

  return (
    <header className="text-primary bg-background border-b border-muted">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeSwitch />

          {user ? (
            <UserDropdown />
          ) : (
            <Button asChild>
              <Link href={endpoints.pages.login} prefetch={false}>
                Sign In
              </Link>
            </Button>
          )}

          {/* <Button asChild variant="accent">
            <Link href="#"  prefetch={false}>
              Sign Up
            </Link>
          </Button> */}
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

function UserDropdown() {
  const { props } = usePage();
  const user = (props?.current_user as CurrentUser) || null;

  const { delete: logout } = useForm();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 cursor-pointer border-border border-solid border-1 rounded-full bg-secondary transition-all duration-200 ">
        <IconUserHexagon size={26} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard" prefetch={false}>
              Dashboard
              <DropdownMenuShortcut>
                <IconLayoutDashboard size={22} />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>
              <IconUser size={22} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>
              <IconSettings size={22} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logout(endpoints.api.logout);
          }}
        >
          Log out
          <DropdownMenuShortcut>
            <IconLogout />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-4 p-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium"
            prefetch={false}
          >
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
