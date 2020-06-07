import React from "react";

const SocialLink = ({ networkLink, userName }) => {
  return <a href={networkLink}>{userName}</a>;
};

export default SocialLink;
