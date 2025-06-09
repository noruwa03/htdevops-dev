import { useState } from "react";
import { Link } from "react-router";
import BottomShapeFirst from "../../../assets/icons/bottom_shape_first.svg";

type reactSelectType = {
  reactSelect: any;
};

const ContactForm = (props: reactSelectType) => {
  const date = new Date();

  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const options = [
    { value: "Bash Script Course", label: "Bash Script Course" },
    { value: "Other DevOps Courses", label: "Other DevOps Courses" },
    { value: "Work with you", label: "Work with you" },
    { value: "Hire our services", label: "Hire our services" },
    { value: "Learn from HTDevOps", label: "Learn from HTDevOps" },
  ];

  const [selectedOption, setSelectedOption] = useState<any>(null);

  const userFormHandler = (evt: any) => {
    const { name, value } = evt.target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (evt: any) => {
    evt.preventDefault();
    const formData = {
      firstName: userDetails.first_name,
      lastName: userDetails.last_name,
      option: selectedOption.value,
      phone: userDetails.phone,
      email: userDetails.email,
      comment: userDetails.comment,
    };

    console.log(formData);
  };

  return (
    <>
      <div className="lg:px-16 py-8 flex flex-row justify-between bg-black h-screen relative">
        <Link
          to="/"
          className="lg:hidden block absolute top-5 lg:right-25 sm:right-8 right-4 text-white lg:py-4 py-3 xl:px-8 lg:px-4 px-6 shadow-[4px_4px_0px_0px_#364153] rounded-full bg-[#07313b] hover:shadow-[2px_2px_0px_0px_#364153] transition-all duration-150 border-[1px] border-gray-600/90 text-sm"
        >
          Go Home
        </Link>
        <div className="lg:w-[50%] w-screen relative">
          <div className="w-full">
            <div className="xl:mt-4 mt-16 mb-8 lg:mb-0 lg:w-4/5 w-[90%] mx-auto">
              <div className="w-5/5">
                <div className="lg:w-full sm:w-4/5 w-5/5 mx-auto">
                  <h1 className="sm:text-3xl text-2xl text-center text-white mb-5">
                    Contact HTDevOps
                  </h1>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="lg:col-span-2 col-span-4">
                      <label htmlFor="FirstName" className="text-sm text-white">
                        First name
                      </label>
                      <input
                        type="text"
                        id="FirstName"
                        name="first_name"
                        value={userDetails.first_name}
                        onChange={userFormHandler}
                        className="block w-full mt-1 outline-none border-[1px] border-white focus:border-green-600 px-4 lg:py-[0.55rem] py-3 rounded-lg placeholder:text-white  placeholder:font-normal placeholder:text-sm text-sm text-white"
                        placeholder="Enter your firstname"
                      />
                    </div>
                    <div className="lg:col-span-2 col-span-4">
                      <label htmlFor="LastName" className="text-sm text-white">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="LastName"
                        name="last_name"
                        value={userDetails.last_name}
                        onChange={userFormHandler}
                        className="block w-full mt-1 outline-none border-[1px] border-white focus:border-green-600 px-4 lg:py-[0.55rem] py-3 rounded-lg placeholder:text-white  placeholder:font-normal placeholder:text-sm text-sm text-white"
                        placeholder="Enter your lastname"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="col-span-4">
                      <div className="text-sm mb-[0.4rem] text-white">
                        What would you like ?
                      </div>

                      <props.reactSelect
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        styles={{
                          control: (baseStyles: any) => ({
                            ...baseStyles,
                            backgroundColor: "transparent",
                            borderRadius: "0.5rem",
                            border: "1px solid #d1d5db",
                            boxShadow: "none",
                            "&:hover": {
                              border: "1px solid oklch(62.7% 0.194 149.214)",
                            },
                            fontSize: "0.875em",
                          }),
                          singleValue: (baseStyles: any) => ({
                            ...baseStyles,
                            color: "#fff", // Apply white color to the selected option
                          }),
                          input: (baseStyles: any) => ({
                            ...baseStyles,
                            color: "#fff", // Apply white color while typing
                          }),
                          placeholder: (baseStyles: any) => ({
                            ...baseStyles,
                            color: "#fff", // Placeholder color
                          }),
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="Phone" className="text-sm text-white">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      name="phone"
                      value={userDetails.phone}
                      onChange={userFormHandler}
                      className="block w-full mt-1 outline-none border-[1px] border-white focus:border-green-600 px-4 lg:py-[0.55rem] py-3 rounded-lg placeholder:text-white  placeholder:font-normal placeholder:text-sm text-sm text-white"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="Email" className="text-sm text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      id="Email"
                      name="email"
                      value={userDetails.email}
                      onChange={userFormHandler}
                      className="block w-full mt-1 outline-none border-[1px] border-white focus:border-green-600 px-4 lg:py-[0.55rem] py-3 rounded-lg placeholder:text-white  placeholder:font-normal placeholder:text-sm text-sm text-white"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="Comment" className="text-sm text-white">
                      Comments or Questions?
                    </label>
                    <textarea
                      id="Comment"
                      name="comment"
                      value={userDetails.comment}
                      onChange={userFormHandler}
                      className="block resize-y w-full h-20 mt-1 outline-none border-[1px] border-white focus:border-green-600 px-4 py-2 rounded-lg placeholder:text-white placeholder:font-normal placeholder:text-sm text-sm text-white"
                      placeholder="Write something brief about yourself and what you do"
                    />
                  </div>

                  <div
                    onClick={submitHandler}
                    className="w-full text-center bg-[#07313b] py-3 outline-none text-white text-sm font-medium mt-6 lg:mb-0 mb-6 rounded-lg cursor-pointer"
                  >
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] lg:block hidden h-[90vh] bg-[#07313b] overflow-hidden">
          <div className="h-full w-full relative">
            <Link
              to="/"
              className="absolute top-8 right-8 text-white lg:py-4 py-3 xl:px-8 lg:px-4 px-6 shadow-[4px_4px_0px_0px_#364153] rounded-full bg-black hover:shadow-[2px_2px_0px_0px_#364153] transition-all duration-150 border-[1px] border-gray-600/90 text-sm"
            >
              Go Home
            </Link>
            <div className="absolute top-[45%] -translate-y-[50%] px-8">
              <div className="mb-4 text-white">
                Become a World class DevOps Engineer
              </div>
              <h1 className="text-5xl text-gray-300">Learn with us</h1>
            </div>
            <img
              src={BottomShapeFirst}
              alt="Bottom"
              className="absolute bottom-0 -right-2 w-[44%]"
            />

            <p className="absolute bottom-4 left-8 text-xs text-white">
              HTDevOps {date.getFullYear()} © All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
