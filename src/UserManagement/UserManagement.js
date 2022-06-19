import React from "react";
import SearchUser from "./SearchUser";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserManagement = () => {
  return (
    <div>
      <h1 className="text-center bg-dark text-warning py-3 mb-3">
        Thông tin sinh viên
      </h1>
      <div className="container">
        <UserForm />
        <SearchUser />
        <UserList />
      </div>
    </div>
  );
};

export default UserManagement;
