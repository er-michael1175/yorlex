import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/session";
import { listSubmissions } from "@/lib/contactStore";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage() {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    redirect("/admin/login");
  }

  const submissions = await listSubmissions();

  return <AdminDashboard initialSubmissions={submissions} />;
}
