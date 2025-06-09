import { useState } from "react";
import AccordionItem from "../accordion/AccordionItem";
import TomAvatar from "../../../assets/images/tomer-baum.png";
import HeinanAvatar from "../../../assets/images/heinan-cabouly.png";
import { Link } from "react-router";

const FAQ = () => {
  const accordionData = [
    {
      question: "What prerequisites do I need for this course?",
      answer:
        "Basic Linux command line knowledge and text editor familiarity required.",
    },
    {
      question: "How long to complete the bash scripting course?",
      answer: "Course takes 2 to 3 hours to complete. with 8 chapters",
    },
    {
      question: "What can I build after finishing this course?",
      answer:
        "Deployment scripts, monitoring tools, backup automation, and CI/CD pipeline components.",
    },
    {
      question: "Is this course suitable for Windows users only?",
      answer: "Works on Windows, Linux, Mac using WSL2 or virtual machines.",
    },
    {
      question: "How does bash fit into modern DevOps practices?",
      answer:
        "Essential for automation, Docker containers, Kubernetes, and CI/CD pipeline integration.",
    },
    {
      question:
        "What's bash scripting versus Ansible or Terraform differences?",
      answer:
        "Bash handles system tasks while Ansible manages configuration and infrastructure",
    },
    {
      question: "Do you provide hands-on projects and examples?",
      answer:
        "Yes, over fifteen real-world projects from simple to complex automation",
    },
    {
      question: "How do you handle error and debugging techniques?",
      answer:
        "Exit codes, trap statements, logging practices, and robust error handling",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex: any) => (prevIndex === index ? null : index));
  };

  return (
    <section className="sm:min-h-full min-h-screen w-full sm:pt-20 sm:pb-46 pt-20 pb-20 px-4 md:px-16 lg:px-24 flex flex-col relative overflow-hidden">
      <h2 className="text-center sm:text-5xl text-3xl text-white font-medium mb-5">
        FAQ, Got questions? We got answers!
      </h2>
      <div className="mt-6 lg:w-[85%] sm:w-[92%] w-full mx-auto border-[1px] border-gray-700/90 bg-transparent lg:p-6 sm:p-6 p-4 rounded-2xl">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
            showDivider={index < accordionData.length - 1}
          />
        ))}
      </div>

      <h3 className="mt-24 text-center sm:text-4xl text-2xl text-white font-medium mb-5">
        Still have questions?
      </h3>
      <p className="lg:text-lg text-gray-300/70 text-center lg:w-2/5 w-full mx-auto">
        Can't find the answer you're looking for? Please ask us a question!
      </p>

      <div className="w-full lg:w-3/5 mx-auto grid place-content-center mt-6">
        <div className="flex flex-row items-center overflow-hidden pl-[0.5rem]">
          <img
            src={TomAvatar}
            alt="Avatar"
            className="size-13 inline-block border-3 border-gray-100 mr-0 ml-[-0.5rem] rounded-full"
          />
          <img
            src={HeinanAvatar}
            alt="Avatar one"
            className="size-13 inline-block border-3 border-gray-100 mr-0 ml-[-1rem] rounded-full"
          />
        </div>
      </div>
      <Link
        to="/contact"
        className="mt-8 mx-auto items-center font-medium bg-[#07313b] py-3 px-8 rounded-full text-[#c9ffbe] border-[1px] border-[#c9ffbe] text-base"
      >
        Get in touch
      </Link>
    </section>
  );
};

export default FAQ;
