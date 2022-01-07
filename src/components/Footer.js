import React from "react";
import {
  FaLinkedin,
  FaStackOverflow,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaWhatsapp,
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
          href="https://www.linkedin.com/in/dhruv-sakariya-764838207/"
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
          href="https://stackoverflow.com/users/15630174/dhruv-codercode"
        >
          <FaStackOverflow color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://www.facebook.com/dhruv.sakariya.186"
        >
          <FaFacebook color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://www.instagram.com/dhruvsakariya4/"
        >
          <FaInstagram color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://medium.com/@dhruvsakariya2304"
        >
          <FaMedium color="white" size={"36px"} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className="px-4 py-2"
          href="https://wa.me/919825690439"
        >
          <FaWhatsapp color="white" size={"36px"} />
        </a>
      </footer>
      <p className="text-center py-2">
        Copyright ©2022-2023 Dhruv Sakariya®. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
