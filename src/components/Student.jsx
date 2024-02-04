import { useEffect, useState } from "react";
import "./Student.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createStudent,
  deleteStudent,
  getAllStudent,
  updateStudent,
} from "../features/student/studentApiSlice";
import { selectStudent } from "../features/student/studentSlice";

const Student = () => {
  // Data Create State
  const dispatch = useDispatch();
  const { student, loading, error, message } = useSelector(selectStudent);

  // Input Data State Handle
  const [input, setInput] = useState({
    name: "",
    roll: "",
    phone: "",
    photo: "",
  });
  const [edit, setEdit] = useState(false);

  const handleInputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //   handle Create Student
  const handleCreateStudent = () => {
    if (edit) {
      dispatch(updateStudent(input));
      setEdit(false);
    } else {
      dispatch(createStudent(input));
    }

    setInput({
      name: "",
      roll: "",
      phone: "",
      photo: "",
    });
  };

  //   Handle Update Student
  const handleStudentUpdate = (data) => {
    setInput(data);
    setEdit(true);
  };

  useEffect(() => {
    dispatch(getAllStudent());
  }, [dispatch]);

  return (
    <>
      {/* UI Design */}

      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Create Student</div>
              {loading && <h1>Loading . . .</h1>}
              <div className="card-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Student Name"
                    name="name"
                    value={input.name}
                    onChange={handleInputValue}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Student Roll"
                    name="roll"
                    value={input.roll}
                    onChange={handleInputValue}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Student Phone"
                    name="phone"
                    value={input.phone}
                    onChange={handleInputValue}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Student Photo"
                    name="photo"
                    value={input.photo}
                    onChange={handleInputValue}
                  />
                </div>
                <div className="mb-3">
                  <button
                    onClick={handleCreateStudent}
                    className="btn btn-sm btn-primary"
                  >
                    {edit ? "Update" : "Create"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Data */}
        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {student.length > 0
                  ? student.map((item, index) => {
                      return (
                        <tr className="align-middle" key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <img src={item.photo} alt="" />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.roll}</td>
                          <td>{item.phone}</td>

                          <td>
                            <button
                              onClick={() => handleStudentUpdate(item)}
                              className="btn btn-sm btn-info"
                            >
                              <i className="fas fa-edit"></i>
                            </button>
                            <button
                              onClick={() => dispatch(deleteStudent(item.id))}
                              className="btn btn-sm btn-danger mx-1"
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                            <button className="btn btn-sm btn-warning">
                              <i className="fas fa-eye"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : "No Data Found"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
