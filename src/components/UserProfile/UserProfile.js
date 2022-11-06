import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex justify-center ">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="avatar flex justify-center py-3">
          <div className="w-24 rounded-full">
            <img src={user.photoURL} alt="user_photo" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
