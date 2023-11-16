import React from "react";
import "./App.css";
import MainContainer from "../src/components/MainContainer";
import Login from "../src/components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "../src/components/Welcome";
import ChatArea from "../src/components/ChatArea";
import Users from "../src/components/Users";
import CreateGroups from "../src/components/CreateGroups";
import Groups from "../src/components/Groups";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"App" + (lightTheme ? "" : "-dark")}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat/:_id" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;