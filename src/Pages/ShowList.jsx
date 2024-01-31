import { useState, useEffect } from "react";
import Card from "../Components/Card";

function ShowList() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((output) => setData(output));
  }, []);

  return data ? (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-y-16 my-10">
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
