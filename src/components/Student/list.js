import React from "react";

function list({ students }) {
  function renderStudent() {
    return students.map((student, i) => {
      return <li key={i}>{student.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderStudent()}</ul>
    </div>
  );
}

export default list;
