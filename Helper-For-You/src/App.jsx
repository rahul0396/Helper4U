function App() {
  return (
    < >
      <div className=" grid grid-cols-2 bg-slate-100 w-fit px-10 py-5">
        <div className="px-20 py-16">
          <h1 className="text-4xl font-bold">Need a Verified Helper?</h1>
          <h1 className="text-4xl font-bold text-red-600">
            Explore our Options.
          </h1>
          <p className="text-3xl tracking-wide py-4 ">
            Because You Deserve a Stress-Free Life.
          </p>

          <h2 className="text-2xl font-semibold py-2 ">
            Transforming Hiring, Empowering Lives
          </h2>
        </div>
        <div>
          <div>
            <img
              src="/src/assets/img/home.png"
              height={"200px"}
              width={"100%"}
              alt="home"
              className="rounded-2xl "
            />
          </div>
        </div>
        
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center">Customer Testimonials</h2>
      </div>
    </>
  );
}

export default App;
