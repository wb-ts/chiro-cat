import {
  SortAscendingIcon,
  SortDescendingIcon,
} from "@heroicons/react/outline";
import ContactRow from "../../components/contact-row";
import { people } from "./data";

export default function ContactsSearch() {
  return (
    <div className="mt-2 w-full">
      <div className="w-full flex justify-end">
        <input
          type="text"
          name="keyword"
          id="keyword"
          placeholder="Search here"
          className="px-3 py-2 rounded-md border w-full md:w-1/2 lg:w-1/3"
        />
      </div>
      <div className="mt-8 clear-both">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span>Avatar</span>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex justify-between">
                  <span>First Name</span>
                  <button>
                    <SortAscendingIcon className="w-4 h-4" />
                  </button>
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex justify-between">
                  <span>Last Name</span>
                  <button>
                    <SortAscendingIcon className="w-4 h-4" />
                  </button>
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span>Title</span>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span>Role</span>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Telephone
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {people.map((p) => (
              <ContactRow {...p} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
