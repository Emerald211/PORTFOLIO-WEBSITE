import Headline from "../shared/Headline";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmitHandler = async (data) => {
 
    emailjs.init("mESjxZ_og4PkWRGaA")

   

   

    console.log(data);

    console.log("Submitted");

    emailjs
    .send("service_x1xb88n", "template_vswwvhp", data)
    .then((response) => {
      console.log(
        "Message sent successfully:",
        response.status,
        response.text,

      );

      alert("Thanks for contacting me, Reach me via any of my social handles");

      resetField("name")
      resetField("email")
      resetField("message")


    })
    .catch((error) => {
      console.error(
        "Error sending message:",
        error
      );
    });

 
  };
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto mt-8 px-7 font-serrat contact"
      id="contact"
    >
      <Headline
        title={"CONTACT"}
        subtitle={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        }
      />

      <div className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            {...register("name")}
            id="name"
            placeholder="Enter Your Name"
            className="p-5"
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            {...register("email")}
            id="email"
            placeholder="Enter Your Email"
            className="p-5"
          />
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            {...register("message")}
            cols="80"
            rows="10"
            placeholder="Enter Your Message"
            className="p-5 mb-8"
          ></textarea>
          <button className="btn px-14 py-4 shadow-sm">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
