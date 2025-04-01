import React from "react";
import { DisplayHighlightSection,  } from "../components/organisms/NavbarListProperties";


const NavBarListPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10">
      <DisplayHighlightSection /> 
    </div>
  );
};

export default NavBarListPage;
