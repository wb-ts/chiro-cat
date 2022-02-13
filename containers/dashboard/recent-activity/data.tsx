import { ITransaction } from "../../../_types/txs";

export const transactions: ITransaction[] = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 2,
    name: "Payment to Doug Mann",
    href: "#",
    amount: "$19,500",
    currency: "USD",
    status: "processing",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 3,
    name: "Payment to Erica Frost",
    href: "#",
    amount: "$8,750",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
];
