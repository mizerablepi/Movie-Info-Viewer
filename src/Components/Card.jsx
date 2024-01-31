import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Card({ show }) {
  const summary = useRef();
  useEffect(() => {
    summary.current.innerHTML = show.summary.slice(0, 150) + "<b>...</b>";
  }, []);

  return (
    <div className="">
      <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-800 shadow-md shadow-black/55">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src={show.image != null ? show.image.original : "/notFoundImg.jpg"}
            alt="show image"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
            {show.name}
          </h5>
          <p
            className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
            ref={summary}
          ></p>
        </div>
        <div className="p-6 pt-0">
          <Link
            to={`/shows/${show.id}`}
            className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
