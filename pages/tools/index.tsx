import UsersTool from "../../containers/tools/users-tool";
import ContactsTool from "../../containers/tools/contacts-tool";
import DashboardLayout from "../../layouts/dashboard";

export default function Tools() {
  return (
    <DashboardLayout>
      <main className="flex-1 pb-8">
        <div className="mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Page Tools
            </h2>
            <div className="mt-2 w-full flex gap-4 justify-between">
              <UsersTool />
              <ContactsTool />
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
