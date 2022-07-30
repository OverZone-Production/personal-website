import mmmBG from "../assets/image/mmm.jpg";
import mockup from "../assets/image/deco.jpg"
import { MdKeyboardArrowDown } from "react-icons/md";

const FirstSection = () => {
  const styles = {
    backgroundUrl: `url(${process.env.PUBLIC_URL + "/assets/image/mmm.jpg"})`,
  };

  return (
    <>
      <div
        className="first-section-contain w-screen h-96 outline mt-2 grid grid-cols-2 container mx-auto bg-[#1F2440]"
        style={styles}
      >
        <div className="col-1 text-center pt-16">
          <h1 className="text-2xl text-[#F2CF8D]">Welcome To MY WEBSITE</h1>
          <h2 className="text-xl text-[#F2CF8D]">I do fun things</h2>
          <div className="button-group flex justify-center mt-5 gap-1">
            <a href="https://www.youtube.com/">
              <button className="bg-blue-500 text-[#F2CF8D] px-8 py-2 hover:bg-blue-900">
                <h1 className="text-md font-bold text-[#F2CF8D]">Download MY Game</h1>
                <p>V19.0.1</p>
              </button>
            </a>
            <button className="bg-blue-500 text-white px-2 py-2 hover:bg-blue-900 ">
              <MdKeyboardArrowDown className="text-4xl" />
            </button>
          </div>

            {/* Term and condition */}
            <p className="text-sm mt-3 text-gray-500 text-[#F2CF8D]">By using,you agree to its license and privacy statement</p>

        </div>

        {/* Product Image */}
        <div className="col-2 pt-5">
          <img className="w-96 rounded-md border border-2 border-b-8 border-neutral-500 shadow-2xl shadow-neutral-500 hover:-translate-y-4 duration-500" src={mockup} alt="" />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
