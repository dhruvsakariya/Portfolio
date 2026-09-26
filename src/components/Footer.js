import React from "react";
import {
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="flex justify-center py-3 flex-wrap	">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/dhruvsakariya"
          className="px-4 py-2"
        >
          <FaGithub color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://www.linkedin.com/in/dhruvsakariya/"
        >
          <FaLinkedin color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://twitter.com/dhruvsakariya23"
        >
          <FaTwitter color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://stackoverflow.com/users/15630174/dhruv-sakariya"
        >
          <FaStackOverflow color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://medium.com/@dhruvsakariya2304"
        >
          <FaMedium color="white" size={"36px"} />
        </a>
      </footer>
      <p className="text-center py-2">
        Copyright ©2022-2023 Dhruv Sakariya®. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
