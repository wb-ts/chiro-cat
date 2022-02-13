import Image from "next/image";
import { classNames } from "../utils";

export interface IContact {
  firstName: string;
  lastName: string;
  title: string;
  role: string;
  email: string;
  telephone: string;
  imageUrl: string;
}

const roleStyles = [
  { status: "Admin", class: "bg-green-100 text-green-800" },
  { status: "Developer", class: "bg-yellow-100 text-yellow-800" },
  { status: "Staff", class: "bg-gray-100 text-gray-800" },
];

export default function ContactRow(contact: IContact) {
  return (
    <>
      <tr className="bg-white">
        <td className="max-w-0 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          <Image
            src={contact.imageUrl}
            width={50}
            height={50}
            alt={`${contact.firstName}`}
            className="rounded-full"
          />
        </td>
        <td className="max-w-0 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          <span className="text-gray-500 truncate group-hover:text-gray-900">
            {contact.firstName}
          </span>
        </td>
        <td className="max-w-0 px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          <span className="text-gray-500 truncate group-hover:text-gray-900">
            {contact.lastName}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span className="text-gray-500 font-medium">{contact.title}</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span
            className={classNames(
              roleStyles.find((roleStyle) => roleStyle.status === contact.role)
                ?.class,
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
            )}
          >
            {contact.role}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span>{contact.email}</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span>{contact.telephone}</span>
        </td>
      </tr>
    </>
  );
}
