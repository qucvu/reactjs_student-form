import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserForm = () => {
  const [values, setValues] = useState({
    idStudent: "",
    phone: "",
    fullName: "",
    email: "",
  });
  const { student } = useSelector((state) => {
    return {
      student: state.user.selectedStudent,
    };
  });
  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const disaptch = useDispatch();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (student.idStudent) {
      disaptch({ type: "UPDATE_STUDENT", id: student.idStudent, values });
    } else {
      disaptch({ type: "CREATE_STUDENT", student: values });
    }
    setValues({ idStudent: "", phone: "", fullName: "", email: "" });
  };

  useEffect(() => {
    setValues(student);
  }, [student]);
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="idStudent" className="form-label fw-bold">
              Mã sinh viên
            </label>
            <input
              type="text"
              placeholder="Nhập mã sinh viên..."
              disabled={student.idStudent}
              className="form-control"
              id="idStudent"
              aria-describedby="idHelp"
              value={values.idStudent || ""}
              name="idStudent"
              onChange={handleChangeInput}
            />
            {!student.idStudent && (
              <div id="idHelp" className="form-text fw-bold">
                Vui lòng nhập đúng!!
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-bold">
              Số điện thoại
            </label>
            <input
              type="text"
              placeholder="Nhập số điện thoại..."
              className="form-control"
              id="phone"
              value={values.phone || ""}
              name="phone"
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="col-sm-6 d-flex justify-content-between flex-column">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label fw-bold">
              Họ tên
            </label>
            <input
              type="text"
              placeholder="Nguyen Van A"
              className="form-control"
              id="fullName"
              value={values.fullName || ""}
              name="fullName"
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="name@example.com..."
              className="form-control"
              id="email"
              value={values.email || ""}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-success fw-bold px-3 py-2 mt-2">
          {student.idStudent ? "Cập nhật" : "Thêm sinh viên"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
