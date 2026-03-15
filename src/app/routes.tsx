import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Deities } from "./pages/Deities";
import { Gallery } from "./pages/Gallery";
import { Events } from "./pages/Events";
import { Sevas } from "./pages/Sevas";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "deities", Component: Deities },
      { path: "gallery", Component: Gallery },
      { path: "events", Component: Events },
      { path: "sevas", Component: Sevas },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);