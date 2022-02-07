import Expence from "./components/Expences/Expence";
import React, { useState } from "react";
import NewExpence from "./components/NewExpence/newExpence";
const data = [
  {
    date: new Date(2019, 2, 6),
    price: 1020,
    discription: "we all are well",
    id: 1,
  },
  // {
  //   date: new Date(2020,3,8),
  //   price: 200,
  //   discription: "we alll",
  // },
  {
    date: new Date(2021, 6, 9),
    price: 10,
    discription: "we are all",
    id: 2,
  },
  {
    date: new Date(2022, 6, 9),
    price: 510,
    discription: "we are all all",
    id: 3,
  },
  {
    date: new Date(2019, 6, 6),
    price: 100,
    discription: "Maity",
    id: 4,
  },
];
function App() {
  const [allexpence, setAllExpence] = useState(data);

  const expenceData = (data) => {
    setAllExpence((prevstate) => {
      return [data, ...prevstate];
    });
  };
  console.log("ssssss", allexpence);
  return (
    <div>
      <NewExpence onallexpence={expenceData} />
      <Expence data={allexpence} />
    </div>
  );
}

export default App;

// import React from "react";
// import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";

// // import "./index.css";

// function App() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit
//   } = useForm({
//     mode: "onChange"
//   });

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         placeholder="Bill"
//         {...register("firstName", {
//           required: "this is a required",
//           maxLength: {
//             value: 2,
//             message: "Max length is 2"
//           }
//         })}
//       />
//       {errors.firstName && <p>{errors.firstName.message}</p>}

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         placeholder="Luo"
//         {...register("lastName", {
//           required: "this is required",
//           minLength: {
//             value: 2,
//             message: "Min length is 2"
//           }
//         })}
//       />
//       {errors.lastName && <p>{errors.lastName.message}</p>}

//       <label htmlFor="email">Email</label>
//       <input
//         placeholder="bluebill1049@hotmail.com"
//         type="text"
//         {...register("email", {
//           required: "this is required",
//           pattern: {
//             value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//             message: "Invalid email address"
//           }
//         })}
//       />
//       {errors.email && <p>{errors.email.message}</p>}
//       <input type="submit" />
//     </form>
//   );
// }

// export default App;
