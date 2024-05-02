"use client";

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      className="sm:mb-25 w-[min(100% ,
    38rem)] mb-20 scroll-m-14 dark:text-white
    "
      id="contact"
      ref={ref}
      initial={{ opacity: 0.3 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-center text-white  dark:text-gray-300">
        Please contect me directly at{" "}
        <a
          className="cursor-pointer underline "
          href="mailto:negiajay354@gmail.com"
        >
          <b>negiajay354@mail.com</b>
        </a>{" "}
        or through this form
      </p>

      <form
        className="m-3 mt-10 flex flex-col gap-5 p-3"
        action={async (formData) => {
          const { message, error } = await sendEmail(formData);
          if (error) {
            alert("Failed to send email");
          } else {
            toast.success(message);
          }
        }}
      >
        <input
          type="email"
          placeholder="Your Email"
          maxLength={60}
          className="borderBlack h-14 rounded-lg border p-3"
          required
          name="senderEmail"
        />
        <textarea
          className="borderBlack h-52 rounded-lg border p-3"
          placeholder="Your Message"
          required
          maxLength={500}
          name="message"
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2
          rounded-full bg-gray-900 text-white outline-none transition-all dark:bg-slate-300 dark:text-gray-900
          "
        >
          Submit{" "}
          <FaPaperPlane className="text-lg opacity-70 transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
