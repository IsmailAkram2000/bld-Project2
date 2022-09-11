import axios from "axios";
import { useEffect, useReducer } from "react";

const initState = {
  courseData: [],
  isLoading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "sending request":
      return {
        isLoading: true,
      };
    case "response success":
      return {
        courseData: action.payload,
        isLoading: false,
      };
    case "error":
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const CoursesData = () => {
  const [data, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: "sending request" });

    axios
      .get("http://localhost:3002/data")
      .then((res) => {
        dispatch({ type: "response success", payload: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "error", payload: err });
      });
  }, []);

  return data;
};

export { CoursesData, reducer, initState };
