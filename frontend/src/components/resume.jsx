import React from 'react';
import resume from './assets/Resume.pdf';
import { FaPaperclip } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the path of your PDF file
    link.href = resume;
    // Set the download attribute to force the file to be downloaded when clicked
    link.download = 'Resume.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Remove the link from the body after download
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}> <FaPaperclip className='FaRocket' /> Resume</button>
    </div>
  );
};

export default Resume;
