import axios from "axios";
import React, { useEffect, useState } from "react";
import Add from "./add";
import List from "./list";

function Students() {
  const [students, setStudent] = useState([]);

  async function getStudent() {
    const studentRes = await axios.get("http://localhost:5000/admin/");

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
