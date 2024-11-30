import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProfileContent from '../components/ProfileContent';

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col lg:flex-row">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ProfileContent toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Profile;

