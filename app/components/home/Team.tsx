import { Fragment } from "react";
import TomAvatar from "../../../assets/images/tomer-baum.png";
import HeinanAvatar from "../../../assets/images/heinan-cabouly.png";

const Team = () => {
  const bashCourseLink =
    "https://www.udemy.com/course/mastering-bash-scripts/?couponCode=BASHPROMOIL2025";

  const teamInfo = [
    {
      name: "Tomer Baum",
      position: "Founder & CEO",
      avatar: TomAvatar,
    },
    {
      name: "Heinan Cabouly",
      position: "Co Founder & CTO",
      avatar: HeinanAvatar,
    },
  ];
  return (
    <section className="sm:min-h-full min-h-screen w-full sm:pt-20 sm:pb-46 pt-20 pb-20 px-4 md:px-16 lg:px-24 flex flex-col relative overflow-hidden">
      <div className="lg:w-[86%] sm:w-[92%] w-full mx-auto border-[1px] border-[#83838340] bg-gradient-to-r from-[#0a424f] to-transparent lg:p-6 sm:p-6 p-4 rounded-xl space-y-5">
        <div className="p-2 bg-[#c9ffbe] size-13 rounded-xl grid place-content-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 3h8v8l-4-4-4-4z" fill="#052128"></path>
            <path d="M8 8h8v8l-4-4-4-4z" fill="#052128"></path>
            <path d="M3 13h8v8l-4-4-4-4z" fill="#052128"></path>
          </svg>
        </div>
        <p className="text-white">
          Stop wasting hours on manual tasks! Transform from Linux newcomer to
          command line ninja
        </p>
        <p className="text-white">
          \n With our comprehensive Bash Scripting for DevOps course!
        </p>

        <a
          href={bashCourseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center font-medium bg-[#07313b] py-3 px-4 rounded-md text-white border-[1px] border-[#83838340] text-base"
        >
          Learn more
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>

      <div className="mt-24">
        <h2 className="text-center sm:text-5xl text-3xl text-white font-medium mb-5">
          The Team
        </h2>
        <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-8 w-full">
          {teamInfo.map((data: any, index: number) => (
            <Fragment key={index}>
              <div className="rounded-lg shadow-lg lg:w-1/5 sm:w-2/5 w-5/5 bg-[#0a424f] overflow-hidden">
                <div className="sm:h-48 w-full bg-gray-300 relative ">
                  <img
                    src={data.avatar}
                    alt={data.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="pt-2 pb-3 px-4 my-1">
                  <p className="text-white">{data.name}</p>
                  <p className="text-gray-300/70 text-sm">{data.position}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
