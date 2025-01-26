

const Footer = () => {
    return (
      <div className="mt-10">
        <div className="text-center">
          <h2 className="text-3xl font-sora font-bold">Gadget Heaven</h2>
          <p className="text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="border-b my-8 border-gray-200"></div>
        <footer className="footer text-gray-500 text-center pb-10 flex flex-wrap justify-around">
          <nav className="flex flex-col gap-2 items-center">
            <h6 className="font-bold text-lg text-black">Services</h6>
            <a className="link link-hover ">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav className="flex flex-col gap-2 Item items-center">
            <h6 className="font-bold text-lg text-black">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className="flex flex-col gap-2 Item items-center">
            <h6 className="font-bold text-lg text-black">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;