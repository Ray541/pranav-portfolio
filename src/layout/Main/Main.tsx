import { ReactNode } from "react";

type MainProps = { children: ReactNode };

export const Main = ({ children }: MainProps) => {
  return <main className="flex items-center justify-center flex-col">{children}</main>;
};
