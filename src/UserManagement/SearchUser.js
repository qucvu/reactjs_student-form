import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

const SearchUser = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SEARCH_STUDENT_NAME", searchValue });
  }, [searchValue, dispatch]);

  return (
    <div className="d-flex justify-content-end mt-5">
      <input
        type="text"
        className="form-control"
        placeholder="Tìm kiếm sinh viên theo tên ... "
        onChange={(evt) => setSearchValue(evt.target.value)}
      />
    </div>
  );
};

export default SearchUser;
