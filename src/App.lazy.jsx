import { lazy } from "react";

// Lazy-loaded wrapper for the main App component.
const AppLazy = lazy(() => import("./App"));

export default AppLazy;
