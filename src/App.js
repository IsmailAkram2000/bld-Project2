import "./App.css";
import dataJson from "./courses.json";
import CourseCard from "./components/courseCard";

// Data from Json file
const data = dataJson.courses;

function App() {
  // create all courses card from courses object
  const newData = data.map((el) => {
    return <CourseCard course={el} key={el.id} />;
  });

  return (
    <section className="courses">
      <div className="courses-text">
        <h3>Expand your career opportunities with Python</h3>

        <p>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
      </div>

      {/* Add course cards*/}
      <div className="container">{newData}</div>
    </section>
  );
}

export default App;
