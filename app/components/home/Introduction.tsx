import { useState, useEffect } from "react";
import { Link } from "react-router";
import Docker from "../../../assets/icons/docker.svg";
import GithubActions from "../../../assets/icons/github_actions.svg";
import Jenkins from "../../../assets/icons/jenkins.svg";
import AWS from "../../../assets/icons/aws.svg";
import Python from "../../../assets/icons/python.svg";
import Terraform from "../../../assets/icons/terraform.svg";

const Introduction = () => {
  const bashCourseLink =
    "https://www.udemy.com/course/mastering-bash-scripts/?couponCode=BASHPROMOIL2025";

  const animatedList = ["Solutions", "Bash", "Python", "Courses", "Linux"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = animatedList[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          } else {
            // Word is complete, pause then start deleting
            setTimeout(() => setIsDeleting(true), 2000);
            return;
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            // Word is fully deleted, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % animatedList.length);
            return;
          }
        }
      },
      isDeleting ? 75 : 120
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="sm:min-h-full min-h-screen w-full sm:pt-20 sm:pb-46 pt-20 pb-20 px-4 md:px-16 lg:px-24 flex flex-col relative overflow-hidden">
      <Link
        to="/contact"
        className="absolute top-5 lg:right-25 sm:right-8 right-4 text-white lg:py-4 py-3 xl:px-8 lg:px-4 px-6 shadow-[4px_4px_0px_0px_#364153] rounded-full bg-[#07313b] hover:shadow-[2px_2px_0px_0px_#364153] transition-all duration-150 border-[1px] border-gray-600/90 text-sm"
      >
        Contact us
      </Link>
      {/* Background circles with dashed borders - concentric circles */}
      <div className="hidden absolute inset-0 -z-10 sm:flex items-center justify-center">
        <div className="w-[95vw] h-[95vw] rounded-full border-[1px] border-dashed border-gray-700/80 mix-blend-overlay"></div>
        <div className="absolute w-[76vw] h-[76vw] rounded-full border-[1px] border-dashed border-gray-700/80 mix-blend-overlay"></div>
        <div className="absolute w-[58vw] h-[58vw] rounded-full border-[1px] border-dashed border-gray-700/80 mix-blend-overlay"></div>
      </div>

      {/* Blurred white overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[500px] bg-white/50 rounded-[100%] blur-[60px] mix-blend-overlay z-[-1]"></div>

      <div className="hidden lg:block">
        <img
          src={Python}
          alt="Python"
          className="w-20 h-16 absolute bottom-96 left-30 animate-bounce0"
        />

        <img
          src={Docker}
          alt="Docker"
          className="w-20 h-16 absolute bottom-54 left-5 animate-bounce1"
        />

        <img
          src={AWS}
          alt="AWS"
          className="w-20 h-16 absolute bottom-40 left-60 animate-bounce0"
        />

        <img
          src={Terraform}
          alt="Terraform"
          className="w-22 sm:h-18 absolute top-30 right-[19rem] animate-bounce0"
        />

        <img
          src={GithubActions}
          alt="GithubActions"
          className="w-16 h-16 absolute top-40 right-16 animate-bounce1"
        />
        <img
          src={Jenkins}
          alt="Jenkins"
          className="sm:w-24 sm:h-24 w-20 h-20 absolute lg:bottom-44 lg:right-20 bottom-52 right-22 animate-bounce0"
        />
      </div>

      <div className="lg:mt-20 mt-5 mx-auto">
        <div className="grid place-content-center">
          <a
            href={bashCourseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm w-48 bg-[#c9ffbe] mb-4 mx-auto text-center px-3 py-2 rounded-full"
          >
            Get started today! 🚀
          </a>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight text-center text-white">
          HT DevOp :{" "}
          <span className="text-[#c9ffbe] ml-2">
            {currentText}
            <span
              className={`text-white ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            >
              |
            </span>
          </span>
        </h1>
        <h2 className="text-lg sm:text-3xl lg:text-4xl font-normal mt-4 text-gray-300/70 text-center lg:w-3/5 w-full mx-auto">
          See how we can help you become the next best DevOps.
        </h2>
        <div className="inline-flex flex-wrap space-y-2 sm:space-y-0 items-center justify-center text-white p-2 rounded-lg mt-12 w-full mx-auto">
          <span className="font-medium mr-2">Super</span>
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-xs px-1">
              <span className="bg-[#00b67a] p-1">⭐</span>
            </span>
          ))}
          <span className="ml-2">7 reviews on Bootcamp</span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
