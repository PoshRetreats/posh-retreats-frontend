import React from "react";
import { useNavigate } from "react-router-dom";
// import { HOME_URL } from 'routes/frontend';

export default function NotFound() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/");
  });
  return <h1>NotFound: youre seeing this because this page dont exist yet</h1>;
}
