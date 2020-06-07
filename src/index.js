import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import Avatar from "./Avatar";
import UserName from "./UserName";
import Details from "./Details";
import PlaceHolder from "./PlaceHolder";
import SocialLink from "./SocialLink";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Mastouri",
  location: "Paris",
  foodType: "everything",
  age: 29,
  likes: "Coding into the wee hours of the morning",
  githubName: "amineMas",
  linkedin: "https://www.linkedin.com/in/aminemastouri/",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <Avatar link={user.avatar} />
        <UserName name={user.name} link={user.linkedin} />
        <PlaceHolder text="Location" />
        <Details info={user.location} />
        <PlaceHolder text="Eats" />
        <Details info={user.foodType} />
        <PlaceHolder text="Age" />
        <Details info={user.age} />
        <PlaceHolder text="Likes" />
        <Details info={user.likes} />
        <PlaceHolder text="Github" />
        <SocialLink
          networkLink="https://github.com/amineMas"
          userName={user.githubName}
        />
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
