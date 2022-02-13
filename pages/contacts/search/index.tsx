import ContactsSearch from "../../../containers/contacts-search";
import DashboardLayout from "../../../layouts/dashboard";

export default function ContactSearch() {
  return (
    <DashboardLayout>
      <main className="flex-1 pb-8">
        <div className="mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Search Contacts
            </h2>
            <ContactsSearch />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
