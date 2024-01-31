function Index() {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('/hero-bg.jpg')] bg-contain h-[30rem] bg-black">
        <div className="bg-black/70 w-full h-full flex items-center justify-center">
          <div className="pb-30 flex flex-col items-center">
            <div className="text-white text-6xl font-bold  pb-10">
              All your favorite shows,
              <br />
              in one place
            </div>
            <button className="bg-red-500 text-2xl px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-all hover:shadow-md hover:shadow-red-400">
              VIEW SHOWS
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-8 ">
        <div className="md:w-[30rem]">
          <h2 className="font-bold text-2xl text-center pb-8">About Us.</h2>
          <p>This website was created becuase i had to, THE END.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            eaque quisquam quo qui consectetur et obcaecati odit sapiente,
            laborum ab at eveniet? Debitis maxime nostrum iste soluta at quod
            sequi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
