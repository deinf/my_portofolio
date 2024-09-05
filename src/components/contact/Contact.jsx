import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import { HiOutlineMail } from "react-icons/hi";

import './Contact.css'

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("pedro.sales.muniz@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <section className="section" id="contact">

          <h2 className="section__title">Contact</h2>
          <span className="section__subtitle">Get in touch</span>
          <div className="container card-container">

              <div className="email-content" >
              <HiOutlineMail />
                <span>danangekasaputra@outlook.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="button"
                href="mailto:danangekasaputra@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
         
          </div>
      

      
    </section>
  );
}

export default Contact;