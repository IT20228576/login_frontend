import axios from "axios";
import React, { useEffect, useState } from "react";
import Add from "./add";
import List from "./list";

function Students() {
  const [students, setStudent] = useState([]);

  async function getStudent() {
    const studentRes = await axios.get("https://mern-login-test.herokuapp.com/admin/");

    setStudent(studentRes.data);
  }

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <Add getStudent={getStudent} />
      <List students={students} />
    </div>
  );
}

export default Students;
