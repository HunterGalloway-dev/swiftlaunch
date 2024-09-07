import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSidebarCollapsed = false;
  return (
    <div className="flex w-full min-h-screen h-screen">
      <DashboardSidebar />
      <main
        className={`flex flex-col w-full h-full ${isSidebarCollapsed} pl-0 md:pl-40`}
      >
        <DashboardNavbar />
        {children}
      </main>
    </div>
  );
}
