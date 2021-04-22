import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mk",
      image:
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-374971,resizemode-1,msid-68423006/magazines/panache/yamaha-motor-unveils-155-cc-bike-mt-15-at-rs-1-36-lakh.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
