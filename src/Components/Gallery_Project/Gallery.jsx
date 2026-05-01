import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [UserData, setUserData] = useState([]);
  const [Index, setIndex] = useState(1);
  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=10`,
    );
    setUserData(response.data);
    console.log(UserData);
  };

  let printuserdata = <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold' >Loading.......</h3>;

  if (UserData.length > 0) {
    printuserdata = UserData.map((item) => {
      return (
        <a href={item.url}>
          <div
            className="h-45 w-55 bg-white overflow-hidden rounded"
            key={item.id}
          >
            <img
              src={item.download_url}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <h2 className="font-bold">{item.author}</h2>
        </a>
      );
    });
  }
  useEffect(() => {
    getdata();
  }, [Index]);

  return (
    <div className="bg-black h-screen overflow-auto text-white p-5">
      <div className="m-4 p-4 text-xl  h-[82%] flex flex-wrap gap-3">
        {printuserdata}
      </div>
      <div className="flex justify-center items-center gap-20">
        <button
          className="bg-green-700 text-2xl text-white px-4 py-2 rounded  cursor-pointer"
          onClick={() => {
            if (Index > 1) {
              setIndex(Index - 1);
              setUserData([])
            }
          }}
        >
          Prev
        </button>
        <h4>Page {Index}</h4>
        <button
          className="bg-green-700 text-2xl text-white px-4 py-2 rounded  cursor-pointer"
          onClick={() => {
            setUserData([])
            setIndex(Index + 1);

          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
