import axios from "axios";
import React, { useState } from "react";

function Add({ getStudent }) {
  const [studentName, setStudentName] = useState("");

  async function saveStudent(e) {
    e.preventDefault();

    try {
      const studentrData = {
        name: studentName,
      };
      await axios.post("https://mern-login-test.herokuapp.com/admin/", studentrData);
      getStudent();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveStudent}>
        <input
          type="text"
          placeholder="Customer name"
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
          value={studentName}
        />
        <button type="submit">Add new Staff</button>
      </form>
    </div>
  );
}

export default Add;
