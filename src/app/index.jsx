import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes";
import "./app.scss";

const App = () => <RouterProvider router={routes} />;

export default App;
