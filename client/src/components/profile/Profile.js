import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";
import { useState } from "react";
const Profile = () => {
   const [active , setActive] = useState(1);
  return (
    <div className="flex h-full w-full py-10">
      <div className="flex h-full    ">
        <div className="w-[335px]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
      </div>
      <ProfileContent />
    </div>
  );
};

export default Profile;
