/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
// import React, { useEffect, useReducer } from "react";
// import axios from "axios";

// function reducer(state, action) {
//   switch (action.type) {
//     case "LOADING":
//       return {
//         loading: true,
//         data: null,
//         error: null,
//       };
//     case "SUCCESS":
//       return {
//         loading: false,
//         data: action.data,
//         error: null,
//       };
//     case "ERROR":
//       return {
//         loading: false,
//         data: null,
//         error: action.error,
//       };
//     default:
//       throw new Error(`Unhandled action type : &{action.type}`);
//   }
// }

// function Users() {
//   const [state, dispatch] = useReducer(reducer, {
//     loading: false,
//     data: null,
//     error: null,
//   });

//   const fetchUsers = async () => {
//     dispatch({ type: "LOADING" });
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       dispatch({ type: "SUCCESS", data: response.data });
//     } catch (e) {
//       dispatch({ type: "ERROR", error: e });
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const { loading, data: users, error } = state; // state.data를 키워드 조회
// }

// import React, { useState } from "react";

// const Users = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       <p>
//         카운터 값 : <b>{value}</b>
//       </p>
//       <button onClick={() => setValue(value + 1)}> 1 증가 </button>
//       <button onClick={() => setValue(value - 1)}> 1 감소 </button>
//     </div>
//   );
// };

// export default Users;

//참고 https://velog.io/@velopert/react-hooks#10-%EC%A0%95%EB%A6%AC

import React, { useState, useEffect } from "react";

function Users() {
  const [count, setCount] = useState(0);
  console.log(`렌더링... count : ${count}`);

  useEffect(() => {
    const intervalId = setInterval(() => setCount((count) => count + 1), 1000);
    return () => clearAutoCount(intervalId);
  }, []);

  return <p>자동 카운트 : {count} </p>;
}

export default Users;
