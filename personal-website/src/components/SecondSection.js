import { FaHeart } from "react-icons/fa";

const newData = [
    {topic: "[Update 12.5] New Item, stage and event", like: 102, link:"#"},
    {topic: "[Update 12.6] New Item, stage and event", like: 167, link:"#"},
]

const NewsItem = (props) => {
    const {topic, like, link} = props;
  
    return (
    <>
      <div className="news-item flex my-3 p-3 border border-[#F2CF8D] rounded-xl">
        <div className="text-md text-[#F2CF8D]">
          <p>{topic}</p>
          <div className="like flex ">
            <FaHeart className="text-xl text-[#BF0B3B]" />
            {like}
          </div>
          <a href={link}>
            <button className="bg-[#0D0D0D] p-2 rounded-xl border-t-5 hover:bg-[#464AA6] hover:border-none">
              read more
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

const RenderNewsITtem = () => {
    return newData.map((news, idx) => <NewsItem topic={news.topic} like={news.like} link={news.link} key={idx} />)
}

const SecondSection = () => {
  return (
    <>
      <div className="second-section-contain w-screen h-96 outline mt-2 container mx-auto bg-[#1F2440] border-t-8 border-[#F2CF8D] p-5">
        <h1 className="text-[#F2CF8D] text-xl">New - Develogs</h1>

        {/* News Items */}
        {/* comment like read more */}
        <div className="flex flex-col">
            {RenderNewsITtem()}
        </div>
      </div>
    </>
  );
};

export default SecondSection;
