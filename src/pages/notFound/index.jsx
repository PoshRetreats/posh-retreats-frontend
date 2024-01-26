import React from "react";
import useAppNavigator from "hooks/useAppNavigator";
// import { HOME_URL } from 'routes/frontend';

export default function NotFound() {
  const { appNavigator } = useAppNavigator();
  React.useEffect(() => {
    appNavigator("/");
  });
  return <h1>NotFound: youre seeing this because this page dont exist yet</h1>;
}
