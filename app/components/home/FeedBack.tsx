import AvatarOne from "../../../assets/images/01.png";
import AvatarTwo from "../../../assets/images/02.png";
import AvatarThree from "../../../assets/images/03.png";
import AvatarFour from "../../../assets/images/04.png";
import AvatarFive from "../../../assets/images/05.png";

const FeedBack = () => {
  const reviews = [
    {
      name: "Marvin Lukas",
      avatar: AvatarOne,
      message:
        "Overall, the 'Mastering Bash Scripts' course was an invaluable experience that significantly improved my scripting capabilities. I highly recommend this course to anyone looking to deepen their understanding of Bash scripting, whether they are beginners or looking to refine their skills. The practical skills gained from this course will be beneficial in various technical roles.",
      rating: 5,
    },
    {
      name: "Victor Garry",
      avatar: AvatarTwo,
      message:
        "The skills I acquired from this course will undoubtedly benefit my career in the tech industry. I've already started implementing Bash scripts in my daily tasks, which has improved my efficiency and productivity. The knowledge I gained has equipped me to tackle more complex projects with confidence, enhancing my value as a professiona",
      rating: 5,
    },
    {
      name: "Bobo Hopo",
      avatar: AvatarThree,
      message:
        "Engaging with fellow students and the instructor was a crucial aspect of my learning journey. The course provided opportunities for discussion and collaboration, which enriched my understanding of complex topics. The supportive environment encouraged me to ask questions and seek clarification, making the learning experience more enjoyable and effective",
      rating: 5,
    },
    {
      name: "Steffen Ostermann",
      avatar: AvatarFive,
      message:
        "The Mastering Bash Scripts course offers a comprehensive overview of Bash scripting, starting from the basics and progressing to more advanced topics. The course is well-structured, with each module building on the previous one, which facilitates a smooth learning experience. The combination of theoretical explanations and practical exercises allows students to apply their knowledge effectively",
      rating: 5,
    },
    {
      name: "Wilson Alves",
      avatar: AvatarFour,
      message:
        "Throughout the course, I had the opportunity to enhance my scripting skills significantly. The hands-on exercises were particularly valuable, as they challenged me to think critically and apply what I had learned. I found the process of debugging and optimizing my scripts to be both rewarding and enlightening, leading to a deeper understanding of how Bash works",
      rating: 4,
    },
  ];

  // Triple the reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  const ReviewCard = ({ data }: any) => (
    <div className="rounded-xl w-80 flex-shrink-0 border-[1px] border-[#83838340] overflow-hidden p-4 mx-2">
      <p className="text-gray-300/70 text-base mb-4">{data.message}</p>
      <div className="flex flex-row items-center justify-start gap-4">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="mb-1">
            {[...Array(data.rating)].map((_, index) => (
              <span key={index} className="text-xs pr-1">
                ⭐
              </span>
            ))}
          </div>
          <p className="text-white text-sm">{data.name}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="sm:min-h-full min-h-screen w-full sm:pt-0 sm:pb-28 pt-10 pb-14 px-4 md:px-16 lg:px-24 flex flex-col relative overflow-hidden">
        {" "}
        <h3 className="text-sm w-36 bg-[#c9ffbe] mb-4 mx-auto text-center px-3 py-2 rounded-full">
          Clients feedback
        </h3>
        <h2 className="lg:w-3/5 w-full mx-auto text-center sm:text-5xl text-2xl text-white font-medium mb-5">
          What our satisfied clients said about us!
        </h2>
        {/* Animated Reviews Container */}
        <div className="mt-12 relative transition-all duration-500 ease-in-out">
          <div className="overflow-hidden relative rounded-bl-3xl rounded-br-3xl">
            {/* Animated Reviews */}
            <div className="flex animate-scroll sm:pb-10 pb-5">
              {duplicatedReviews.map((data, index) => (
                <ReviewCard key={index} data={data} />
              ))}
            </div>

            {/* Bottom Blur Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none blur-[60px] mix-blend-overlay"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedBack;
