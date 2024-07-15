import { Metadata } from "next";

const metadata: Metadata = {
  title: "New Account - Portfolio",
  description: "Create a new account",
};

export { metadata };

const NewAccountLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default NewAccountLayout;
