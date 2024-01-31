import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function ShowDetail() {
  const { id } = useParams();
  const [data, setData] = useState();
  const para = useRef();
  const [user, setUser] = useState();
  const [viewModal, setViewModal] = useState(false);
  // const [formData, setFormData] = useState({
  //   show: "",
  //   username: "",
  //   email: "",
  //   date: "",
  // });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((out) => {
        setData(out);
      });
    setUser({
      username: window.localStorage.getItem("username"),
      email: window.localStorage.getItem("email"),
    });
  }, []);

  useEffect(() => {
    if (data != null) {
      para.current.innerHTML = data.summary;
    }
  }, [data]);

  return data ? (
    <div className="flex">
      <div className="min-w-[16rem] w-1/5 flex flex-col p-4">
        <img
          src={data.image ? data.image.original : "/notFoundImg.jpg"}
          alt="show image"
        />
        <div className="bg-red-100 p-2 mt-2">
          <h2 className="text-center text-xl font-semibold mb-4">
            "{data.name}"
          </h2>
          <div>
            <b>Rating: </b> {data.rating.average ?? "NA"}/10
          </div>
          <div>
            <b>Genre: </b> {data.genres.join(", ")}
          </div>
          <div>
            <b>Premiered: </b> {data.premiered}
          </div>
          {data.status == "Ended" ? (
            <div>
              <b>Ended: </b> {data.ended}
            </div>
          ) : (
            <></>
          )}
          <div>
            <b>Status: </b> {data.status}
          </div>
        </div>
      </div>

      <div className="p-4 w-4/5">
        <h2 className="font-bold text-2xl">Summary: </h2>
        <p ref={para} className="italic p-2"></p>
        <h3 className="font-semibold text-xl mt-4">Timings: </h3>
        <div>
          <b>Airing time: </b>
          {data.schedule.time}hrs {"  "}(
          {data.network ? data.network.country.timezone : ""}){" "}
          <i>{data.schedule.days.join(", ")}</i>{" "}
        </div>
        <div>
          <b>Channel: </b>
          {data.network ? data.network.name : "NA"}
        </div>
        <div>
          <b>Country: </b>
          {data.network ? data.network.country.name : "NA"}
        </div>
        <button
          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] active:shadow-none self-start mt-10"
          onClick={() => setViewModal(true)}
        >
          Book Ticket
        </button>
      </div>

      <div
        className={`absolute w-screen h-full bg-black/40 -top-0 ${
          viewModal ? "" : "hidden"
        }`}
      >
        <form
          className="absolute flex flex-col bg-gray-200 p-8 rounded-lg mt-8 w-[20rem] top-[20%] left-[35%]"
          id="bookTicket"
        >
          <label className="text-xl" htmlFor="movie">
            Show:{" "}
          </label>
          <input
            className="mb-4 rounded p-1"
            type="text"
            name="movie"
            id="movie"
            defaultValue={data.name}
            required
          />
          <label className="text-xl" htmlFor="username">
            Name:{" "}
          </label>
          <input
            className="mb-4 rounded p-1"
            type="text"
            name="username"
            id="username"
            defaultValue={user.username ?? ""}
            required
          />
          <label className="text-xl" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="mb-4 rounded p-1"
            type="text"
            name="email"
            id="email"
            defaultValue={user.email ?? ""}
            required
          />
          <label className="text-xl" htmlFor="date">
            Date:{" "}
          </label>
          <input
            className="mb-4 rounded p-1"
            type="date"
            name="date"
            id="date"
            required
          />
          <div className="flex justify-between">
            <button
              type="submit"
              form="bookTicket"
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] active:shadow-none self-start"
              onSubmit={(e) => {
                e.preventDefault();
                setViewModal(false);
              }}
            >
              Book
            </button>

            <a
              className="text-sm underline cursor-pointer"
              onClick={() => setViewModal(false)}
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <>Loading ...</>
  );
}

export default ShowDetail;
