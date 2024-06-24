import Nav from "./components/Nav";
import Mapa from "./pages/Map/index.jsx";
import Storage from './pages/Storage/index.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: Storage()
  },
  {
    path: "/Mapa",
    element: Mapa()
  }
]);

export default function App() {
  return (
    <main className="w-full h-screen flex bg-zinc-100">
      <Nav />
      <RouterProvider router={router} />
    </main>
  )
}