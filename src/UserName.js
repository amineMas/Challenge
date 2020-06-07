import React from "react";

const UserName = ({ name, link }) => {
  return (
    <h3>
      <a href={link}>{name}</a>
    </h3>
  );
};

export default UserName;
