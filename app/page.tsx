import { redirect } from "next/navigation";

export const metadata = {
  title: "Home",
  description: "Diana Wallace — Start Here",
};

export default function Home() {
  redirect("/start");}