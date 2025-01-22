function HeroBanner() {
    return (
      <div className="relative w-full h-[500px] bg-cover bg-center text-white flex items-center justify-center"
           style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 text-center">
          <h1 className="text-5xl font-bold">Unlimited Movies, TV Shows & More</h1>
          <p className="mt-4 text-lg">Watch anywhere. Cancel anytime.</p>
        </div>
      </div>
    );
  }
  
  export default HeroBanner;
  