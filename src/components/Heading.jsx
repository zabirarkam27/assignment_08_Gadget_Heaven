/* eslint-disable react/prop-types */


const Heading = ({title, subtitle, btn1, btn2}) => {
    return (
      <div className="space-y-5 ">
        <h1 className="text-2xl md:text-3xl text-center font-bold">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <button className="btn rounded-full w-[120px] bg-white text-[#9538E2] font-semibold">{btn1}</button>
          <button className="btn rounded-full w-[120px] bg-white text-[#9538E2] font-semibold">{btn2}</button>
        </div>
      </div>
    );
};

export default Heading;