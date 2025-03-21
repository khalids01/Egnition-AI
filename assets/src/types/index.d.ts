export interface CurrentUser{
    id: number;
    name: string;
    role: "admin" | "user";
    email: string;
}