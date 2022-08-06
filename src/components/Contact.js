import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
  const form = useRef();

  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data) {
      emailjs
        .sendForm(
          "service_ue0ukaj",
          "template_sg5isqr",
          form.current,
          "qRm5AFXJkeL71Y8w9"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setMessageSent(true);
  };

  return (
    <div
      name="contact"
      className="w-full sm:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-4  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter the subject"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              {...register("subject", { required: true })}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              {...register("message", { required: true })}
            />

            {(errors.name ||
              errors.email ||
              errors.subject ||
              errors.message) && (
              <h2 className="text-red-600 pl-10 py-4 max-w-md text-2xl text-center font-bold">
                All the fields are required
              </h2>
            )}

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              SEND
            </button>
            {messageSent && (
              <h2 className="text-blue-600 py-4 pl-10 max-w-md text-2xl text-center font-bold">
                Message Sent !
              </h2>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
