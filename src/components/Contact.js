import React from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkgwpew";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState({ type: "", text: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setMessage("");
          setStatus({
            type: "success",
            text: "Your message has been sent successfully.",
          });
        } else {
          setStatus({
            type: "error",
            text: "Failed to send message. Please try again.",
          });
        }
      })
      .catch(() => {
        setStatus({
          type: "error",
          text: "Something went wrong. Please try again.",
        });
      });
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <form
          onSubmit={handleSubmit}
          netlify
          name="contact"
          className="lg:w-1/2 md:w-2/3 flex flex-col mx-auto w-full py-8"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            I am Looking For <b>Remote</b> opportunity . I have all System which
            needed for web and app development.
          </p>
          <p className="leading-relaxed mb-5">
            Reach me at:{" "}
            <a
              href="mailto:dhruvsakariya2304@gmail.com"
              className="text-indigo-400"
            >
              dhruvsakariya2304@gmail.com
            </a>
          </p>
          {status.text && (
            <div
              className={`mb-4 text-sm ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.text}
            </div>
          )}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
