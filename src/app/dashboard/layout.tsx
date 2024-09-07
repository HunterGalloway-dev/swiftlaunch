import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen h-screen">
      <DashboardSidebar />
      <main className="flex flex-col w-full h-full">
        <DashboardNavbar />
        {children}
      </main>
    </div>
  );
}
