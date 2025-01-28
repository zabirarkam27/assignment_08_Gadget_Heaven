import { Link } from "react-router-dom";

const Banner = () => {
  return (
      <div className="bg-[#9538E2] mb-12 p-10 rounded-b-xl h-[630px]">
        <div className=" flex flex-col items-center gap-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-white leading-16 font-bold">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-white text-center max-w-3xl w-full">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>
          <Link to='/dashboard' className="btn rounded-full text-xl p-5 font-bold text-[#9538E2]">
            Shop Now
          </Link>
          <div className="border border-white rounded-3xl p-6 bg-white/25">
            <img
              className="rounded-3xl w-full max-w-[1062px] object-cover"
              src="./banner.jpg"
            />
          </div>
        </div>
      </div>
  );
};

export default Banner;
