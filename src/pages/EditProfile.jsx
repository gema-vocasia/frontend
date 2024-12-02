import Sidebar from '../components/SideBar';
import FormEditProfile from '../components/FormEditProfile';
import { useState } from 'react';

const EditProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };


  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <FormEditProfile onSubmit={handleSubmit} toggleSidebar={toggleSidebar}/>
    </div>
  );
};

export default EditProfile;