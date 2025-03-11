import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-44 ">
          <Image
            src="https://is3.cloudhost.id/velcro/profile-picture.png"
            width="200"
            height="200"
            layout="responsive"
            className=" aspect-square object-cover rounded-full object-top"
            alt="profile"
          />
        </div>
      </div>
      <h1 className="text-center mt-5">Raditya Bagaswara</h1>
      <p className="text-center">Full-Stack Web Developer</p>
      <div className="flex flex-row items-center justify-center mt-2 gap-3">
        <a href="https://instagram.com/radityabagaswara" target="_blank">
          <IconBrandInstagram />
        </a>
        <a href="https://github.com/radityabagaswara" target="_blank">
          <IconBrandGithub />
        </a>
        <a href="https://www.linkedin.com/in/radityabagaswara/" target="_blank">
          <IconBrandLinkedin />
        </a>
        <a href="mailto:raditya.bagaswara@outlook.com" target="_blank">
          <IconMail />
        </a>
      </div>
    </>
  );
}
export default Header;
