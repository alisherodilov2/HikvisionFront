import "./index.css";
import Navbar from "./components/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./helpers/Pagination";
import { PaginationContext } from "./PaginationContext";

function App() {
  const { currectPage, setCurrectPage, paginationCount, setPaginationCount } =
    useContext(PaginationContext);
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    fetchUsers();
  }, [currectPage]);

  const fetchUsers = async () => {
    try {
      let users = await axios.get(
        `http://localhost:4000/users?page=${currectPage}&limit=${limit}`
      );
      console.log(users.data);
      setPaginationCount(users.data.totalPages);
      setUsers(users.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-full background-image">
        <div className="flex flex-col items-center ">
          <h1
            class="text-2xl md:text-3xl lg:text-5xl text-center mt-10 md:mt-20 font-semibold text-white"
            style={{ textShadow: "0px 0px 10px black" }}>
            УЧЁТ РАБОЧЕГО ВРЕМЕНИ СОТРУДНИКОВ <br />
            Центрального аппарата Комитета <br />
            по автомобильным дорогам <br />
          </h1>
          <div className="w-full max-w-6xl mt-10  flex md:flex-none items-center bg-white p-2 rounded-sm shadow-md overflow-hidden main-desktop">
            <select
              name=""
              className="p-4 border-r rounded-lg border-gray-300"
              id="">
              <option value="">Selected</option>
            </select>
            <input
              type="text"
              className="flex-grow p-4 border-none focus:outline-none"
            />
            <button
              className="text-white p-4 "
              style={{ backgroundColor: "#07967A", width: "15%" }}>
              submit
            </button>
          </div>
          <div className="w-full max-w-6xl mt-10 flex flex-col md:flex-row items-center bg-white p-2 rounded-sm shadow-md overflow-hidden mobile-res">
            <select
              name=""
              className="w-full md:w-auto p-4 border-r rounded-lg border-gray-300 mb-4 md:mb-0"
              id="">
              <option value="">select</option>
            </select>
            <input
              type="text"
              className="w-full md:flex-grow p-4 border-none focus:outline-none mb-4 md:mb-0"
            />
            <button
              className="w-full md:w-auto text-white p-4"
              style={{ backgroundColor: "#07967A" }}>
              submit
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <div className="container-fluid mx-auto p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">
                  Bo'lim
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">
                  F.I.Sh
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">
                  raqam
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">
                  Hodisa
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">
                  Vaqti
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-600">{index + 1}</td>
                  <td className="py-2 px-4 text-gray-600">{user.fullname}</td>
                  <td className="py-2 px-4 text-gray-600">{user.cardNo}</td>
                  <td className="py-2 px-4 text-gray-600">{user.event}</td>
                  <td className="py-2 px-4 text-gray-600">{user.time}</td>
                  <td className="py-2 px-4 text-gray-600">
                    <div
                      className={
                        user.type == 0
                          ? "bg-red-500 rounded-full w-5 h-5"
                          : "bg-green-500 rounded-full w-5 h-5"
                      }></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6">
            <nav className="inline-flex items-center space-x-2">
              <button
                className="px-3 py-1 text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => setCurrectPage(Math.max(currectPage - 1, 0))}
                disabled={currectPage === 0}>
                Previous
              </button>
              <Pagination />
              <button
                className="px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
                onClick={() =>
                  setCurrectPage(Math.min(currectPage + 1, paginationCount - 1))
                }
                disabled={currectPage >= paginationCount - 1}>
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            viewBox="0 1 24 24">
            <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
