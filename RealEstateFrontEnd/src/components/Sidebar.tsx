import { X } from "react-feather";

interface SidebarProps {
    closeSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full fixed top-0 left-0 z-50">
      <div className="flex justify-end p-4 border-b-2">
        Close
        <X className="w-6 h-6 cursor-pointer ml-1" onClick={closeSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
