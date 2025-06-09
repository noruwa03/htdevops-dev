import type { Route } from "./+types/home";
import Introduction from "../components/home/Introduction";
import Team from "../components/home/Team";
import FAQ from "../components/home/FAQ";
import ScrollToTop from "../components/anchor/ScrollToTop";
import FeedBack from "../components/home/FeedBack";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "HT DevOps" },
    { name: "description", content: "Welcome to HT DevOps!" },
  ];
}

const Home = () => {
  return (
    <>
      <Introduction />
      <Team />
      <FAQ />
      <ScrollToTop />
      <FeedBack/>
    </>
  );
}

export default Home