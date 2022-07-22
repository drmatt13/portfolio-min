import React from "react";

const ContactModal = () => {
  return (
    <div>
      <div className="bg-white/40 py-4 px-2 flex flex-col backdrop-blur-md w-[300px] shadow-lg rounded-lg animate-fade-in">
        <div className="mb-2 text-center text-xl font-semibold">Contact Me</div>
        <p className="mb-4 text-center mx-8 text-sm">
          Please contact me for any service inquiries or questions.
        </p>
        <form>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="name"
              className="mb-3 px-2 py-1 w-[90%] rounded active:ring-1 focus:ring ring-pink-400/75 outline-0"
            />
            <input
              type="email"
              placeholder="email"
              className="mb-3 px-2 py-1 w-[90%] rounded active:ring-1 focus:ring ring-pink-400/75 outline-0"
            />
            {/* <textarea
              type="text"
              placeholder="message"
              className="mb-3 px-2 py-1 w-[90%] h-32 resize-none rounded "
            /> */}
            <input
              type="text"
              placeholder="message"
              className="h-32 mb-3 px-2 py-1 w-[90%] rounded active:ring-1 focus:ring ring-pink-400/75 outline-0"
            />
            <input
              type="submit"
              value="SEND"
              className="bg-pink-500 text-white font-bold py-2 w-[90%] rounded cursor-pointer hover:bg-pink-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
