const AboutUs = () => {
  return (
    <div>
      {/* heading */}
      <div className="w-full bg-[#9538E2] text py-24 px-4">
        <div className="max-w-4xl mx-auto text-white text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            {" "}
            About Us
          </h1>
          <p className="text-xl">
            Your one-stop shop for the latest and greatest gadgets! Experience
            cutting-edge technology and trendy accessories designed to elevate
            your lifestyle.
          </p>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* mission & vision */}
        <div className="bg-gray-100 max-w-5xl mx-auto py-12 px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#9538E2] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-500">
              To bring you the best products at the most affordable prices,
              while ensuring a seamless shopping experience from start to
              finish. Join us on our journey to discover the future of gadgets!
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#9538E2] mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-500">
              To become a global leader in delivering innovative gadgets and
              creating unforgettable customer experiences.
            </p>
          </div>
        </div>
        {/* Features Section */}
        <div className="w-full bg-gray-100 py-12 px-4">
          <h2 className="text-3xl font-semibold text-[#9538E2] mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#9538E2] mb-2">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-700">
                Explore the latest gadgets designed to keep you ahead of the
                curve.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#9538E2] mb-2">
                Affordable Prices
              </h3>
              <p className="text-gray-700">
                We bring you the best gadgets at prices that suit your budget.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#9538E2] mb-2">
                Exceptional Support
              </h3>
              <p className="text-gray-700">
                Our team is here to ensure a smooth shopping experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#9538E2] mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-700">
                Get your gadgets delivered quickly and safely to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col gap-4 lg:mx-40 pl-20 md:pl-40 lg:pl-64 my-16">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
