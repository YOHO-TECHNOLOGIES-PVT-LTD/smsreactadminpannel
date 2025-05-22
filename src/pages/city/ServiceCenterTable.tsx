import React from 'react';

const ServiceCenterTable = ({ branches }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {branches.map((branch, index) => (
          <tr key={index}>
            <td>{branch.name}</td>
            <td>{branch.address}</td>
            <td>{branch.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceCenterTable;
