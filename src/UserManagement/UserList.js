import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const UserList = () => {
  const { users, searchValue } = useSelector((state) => {
    return {
      users: state.user.users,
      searchValue: state.user.searchValue,
    };
  });
  // const list = searchList || users;
  const disaptch = useDispatch();

  const handleDeleteStudent = (id) => {
    disaptch({ type: "DELTE_STUDENT", id });
  };

  const handleSelectedStudent = (user) => {
    disaptch({ type: "SELECT_STUDENT", user });
  };

  useEffect(() => {
    if (users.length)
      localStorage.setItem("StudentList", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    disaptch({ type: "GET_STUDENTLIST_FROM_LOCAL" });
  }, [disaptch]);

  return (
    <table className="mt-3 table">
      <thead className="bg-dark text-white">
        <tr>
          <th>Mã sinh viên</th>
          <th>Họ tên</th>
          <th>Sô điện thoại</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          if (
            user.fullName
              .toLowerCase()
              .trim()
              .includes(searchValue.trim().toLowerCase())
          )
            return (
              <tr key={user.idStudent}>
                <td>{user.idStudent}</td>
                <td>{user.fullName}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-info me-2"
                    onClick={() => handleSelectedStudent(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteStudent(user.idStudent)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          return null;
        })}
      </tbody>
    </table>
  );
};
export default UserList;
