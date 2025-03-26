export interface CurrentUser {
  id: number;
  name: string;
  role: "admin" | "user";
  email: string;
}

declare module "@inertiajs/react" {
  export interface PageProps {
    current_user: CurrentUser | null;
  }
}
