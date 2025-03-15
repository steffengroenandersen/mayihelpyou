import { ReactNode } from "react";
interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className="flex flex-col w-full px-5 md:px-20 py-5">{children}</main>;
}
