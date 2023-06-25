import { INavbar } from "../../components/navbar/Navbar.types";

export interface IMainLayout extends React.HTMLProps<HTMLDivElement>, INavbar {
  children: React.ReactNode;
}
