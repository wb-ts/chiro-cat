import DashboardLayout from "../../layouts/dashboard";
import PageHeader from "../../containers/dashboard/pageHeader";
import Overview from "../../containers/dashboard/overview";
import RecentActivity from "../../containers/dashboard/recent-activity";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <main className="flex-1 pb-8">
        {/* Page header */}
        <PageHeader />
        <div className="mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Overview
            </h2>
            <Overview />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Recent activity
            </h2>
            <RecentActivity />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
