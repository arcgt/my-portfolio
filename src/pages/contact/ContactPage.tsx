import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const ContactPage: React.FC = () => {
  return (
    <section>
      <div className='flex flex-row w-screen items-center justify-center gap-10'>
        <FaLinkedin className='size-20 cursor-pointer' onClick={() => {window.open("https://www.linkedin.com/in/arcgt/", "_blank")}}/>
        <FaSquareGithub className='size-20 cursor-pointer' onClick={() => {window.open("https://github.com/arcgt", "_blank")}} />
      </div>
    </section>
  );
};

export default ContactPage;