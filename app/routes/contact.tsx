import type { Route } from "./+types/contact";
import ContactForm from "../components/contact/ContactForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HT DevOps" },
    { name: "description", content: "Contact HT DevOps!" },
  ];
}

export async function clientLoader() {
  const { default: Select } = await import("react-select");
  return { Select };
}


const Contact = ({ loaderData }: Route.ComponentProps) => {
  const { Select } = loaderData;
  return (
    <>
      <ContactForm reactSelect={Select} />
    </>
  );
};

export default Contact;
