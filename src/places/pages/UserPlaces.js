import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State",
    description: "Most famous sky scrapper",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR804X_2KaNbiBsTEGA-6Kdcs06TAlVYuw2dQ&usqp=CAU",
    address: "New York",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State",
    description: "Most famous sky scrapper",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR804X_2KaNbiBsTEGA-6Kdcs06TAlVYuw2dQ&usqp=CAU",
    address: "New York",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
