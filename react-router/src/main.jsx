import React from "react";
import ReactDOM from "react-dom/client";
import { Home, About, Github, NotMatch } from "./component/index.js";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout.jsx";
import getUserDetailsAsync from "./component/github/get-user-details.js";
import UserDetails from "./component/github/user-details.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<Layout />}>
    //   <Route path="home" element={<Home />}></Route>
    //   <Route path="about" element={<About />}></Route>
    //   <Route path="github" element={<Github></Github>}>
    //     <Route
    //       path=":userId"
    //       loader={({ params }) => {
    //         return getUserDetailsAsync(params.userId);
    //       }}
    //       element={<h1>Hello World</h1>}
    //     ></Route>
    //   </Route>
    //   <Route path="*" element={<NotMatch />} />
    // </Route>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="github" element={<Github />} >
        <Route
          path=":userId"
          loader={({ params }) => getUserDetailsAsync(params.userId)}
          element={<UserDetails />}
        />
      </Route>
      { <Route path="*" element={<NotMatch />} /> }
    </Route>
  )
  )


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
