/* eslint-disable react/prop-types */


const Heading = ({title, subtitle}) => {
    return (
      <div className="space-y-5 mx-auto">
        <h1 className="text-white text-2xl md:text-3xl text-center font-bold">
          {title}
        </h1>
        <p className="max-w-2xl text-center mx-auto text-white">{subtitle}</p>
      </div>
    ); 
};

export default Heading;