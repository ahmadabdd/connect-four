// components
import Navbar from "../../components/navbar/Navbar";

// types
import { IMainLayout } from "./MainLayout.type";

// styles
import './MainLayout.css';


const MainLayout: React.FC<IMainLayout> = ({ children, showRestart, onRestartClick, className, ...rest }) => (
  <>
    <Navbar onRestartClick={onRestartClick} showRestart={showRestart} />
    <div className={`children ${className}`}{...rest}>
        {children}
    </div>
  </>
);

export default MainLayout;
