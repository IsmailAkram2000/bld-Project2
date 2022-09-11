import axios from "axios";
import { useEffect, useReducer } from "react";

const initState = {
  homeCourses: [],
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
        homeCourses: action.payload,
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

const Data = () => {
  const [dataCourses, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: "sending request" });

    axios
      .get("http://localhost:3001/courses")
      .then((res) => {
        dispatch({ type: "response success", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "error", payload: err });
      });
  }, []);

  return dataCourses;
};

export { Data, reducer, initState };
