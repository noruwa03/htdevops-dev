const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
  showDivider,
}: any) => {
  return (
    <>
      <div
        onClick={onClick}
        className="lg:w-4/5 w-full mx-auto rounded-xl lg:py-5 py-2 my-4 transition-all duration-150 cursor-pointer"
      >
        <button className={`w-full flex flex-row items-center justify-between`}>
          <p className="w-[75%] text-start lg:text-lg text-base text-white">
            {question}
          </p>

          {isOpen ? (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12.9492H18"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12.9492H18M12 18.9492V6.94922"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ease-in transition-all duration-150"
              />
            </svg>
          )}
        </button>

        <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>
          <p className="text-base text-gray-300">{answer}</p>
        </div>
      </div>

      {showDivider && (
        <div className="lg:w-4/5 w-full mx-auto">
          <div className="h-px bg-gray-700"></div>
        </div>
      )}
    </>
  );
};

export default AccordionItem;