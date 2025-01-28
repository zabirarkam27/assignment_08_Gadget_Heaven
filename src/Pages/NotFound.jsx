const NotFound = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center text-center items-center space-y-5 ">
        <img className="mb-8 max-w-screen w-11/12" src="./404.jpg" alt="" />
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-black">
          Oh Nooo. This Page Dose Not Exist
        </h2>
        <p className="text-3xl mt-3 font-bold">
          Head to our
          <a href="/" className="underline">
            Homepage
          </a>
          that dose exist
        </p>
      </div>
      <div className=" border-b border-gray-200 w-2/3 mx-auto my-32"></div>
    </div>
  );
};

export default NotFound;
