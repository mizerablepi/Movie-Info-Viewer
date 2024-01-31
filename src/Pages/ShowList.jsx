import { useState, useEffect } from "react";
import Card from "../Components/Card";

function ShowList() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((output) => setData(output));
  }, []);

  console.log(data);

  // console.log(data[0].show);
  return data ? (
    <>
      <div className="grid grid-cols-3 gap-y-16 my-10">
        {data.map((show) => {
          return <Card show={show.show} key={show.show.id} />;
        })}
      </div>
    </>
  ) : (
    <>Loading...</>
  );
}

export default ShowList;
