import {
  CheckCircleIcon,
  RefreshIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  { name: "Pending", href: "#", icon: RefreshIcon, amount: "-$19,500.00" },
  {
    name: "Processed (last 30 days)",
    href: "#",
    icon: CheckCircleIcon,
    amount: "$20,000",
  },
];
