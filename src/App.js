import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import Course from "./Pages/Course";
import Spinner from "./Component/Home/spinner";

import { CoursesProvider } from "./Context/contextData";
import { CourseDataProvider } from "./Context/contextCourseData";

import { Data } from "./Data/data";
import { CoursesData } from "./Data/courseData";

function App() {
  const state = Data();

  const CourseData = CoursesData();

  const renderApp = () => {
    if (state.isLoading) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <CoursesProvider value={{ data: state.homeCourses }}>
            <CourseDataProvider value={{ data: CourseData.courseData }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/course" element={<Course />} />
              </Routes>
            </CourseDataProvider>
          </CoursesProvider>
        </React.Fragment>
      );
    }
  };

  return <React.Fragment>{renderApp()}</React.Fragment>;
}

export default App;
