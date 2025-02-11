import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // ✅ 추가
import "./App.css";
import palette from './lib/colorPalette';

import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ScrapList from "./pages/ScrapList";
import Todaynews from "./pages/Todaynews";
import Search from "./pages/Search";
import SearchDetail from "./pages/SearchDetail";
import TimelineList from "./pages/TimelineList";
import TimelineCreate from "./pages/TimelineCreate";
import TimelineDetail from "./pages/TimelineDetail";
import TimelineUpdate from "./pages/TimelineUpdate";

function App() {
  const location = useLocation();

  useEffect(() => {
    // 배경색 설정
    if (
      location.pathname.startsWith("/timeline") &&
      (location.pathname.endsWith("/create") ||
        location.pathname.endsWith("/update") ||
        /^\/timeline\/\d+$/.test(location.pathname))
    ) {
      document.body.style.backgroundColor = "#FFFFFF";
    } else {
      document.body.style.backgroundColor = palette.blue.background;
    }
  }, [location]);

  return (
    <DndProvider backend={HTML5Backend}> {/* ✅ DndProvider 적용 */}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/scrap" element={<ScrapList />} />
          {/* 오늘의 보도들 */}
          <Route exact path="/today" element={<Todaynews />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/search/:publisherName" element={<SearchDetail />} />
          {/* 나의 타임라이너 */}
          <Route exact path="/timeline" element={<TimelineList />} />
          <Route exact path="/timeline/create" element={<TimelineCreate />} />
          <Route exact path="/timeline/:id" element={<TimelineDetail />} />
          <Route exact path="/timeline/:id/update" element={<TimelineUpdate />} />
        </Routes>
      </div>
    </DndProvider>
  );
}

export default App;
