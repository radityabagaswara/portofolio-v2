import React from "react";
import { Button } from "./Button";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <div className="bg-background-dimmed text-background w-full p-8 md:px-12 rounded-2xl flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold mb-3">Reach Me!</h3>
      <p className="text-sm md:text-base text-center">
        If you have any questions or would like to work with me, feel free to
        email me by clicking the button below.
      </p>
      <div className="mt-5">
        <Button link={"mailto:raditya.bagaswara@outlook.com"} type="inverted">
          <div className="flex items-center gap-3">
            <AiOutlineMail />
            Send Me an Email
          </div>
        </Button>
      </div>
    </div>
  );
};
