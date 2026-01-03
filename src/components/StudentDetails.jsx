import React from 'react';

export const StudentDetails = ({ namedetails, age, classdetails }) => {
  return (
    <div>
      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{namedetails}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{age}</td>
          </tr>
          <tr>
            <th>Class</th>
            <td>{classdetails}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

StudentDetails.defaultProps = {
  namedetails: "enter a name here",
  age: 18,
  classdetails: "enter a class here"
};

export default StudentDetails;