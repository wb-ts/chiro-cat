import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-full">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-64 flex flex-col flex-1">
        <Topbar setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
}
