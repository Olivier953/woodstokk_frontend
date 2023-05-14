import React from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_title">
        wood <span>stokk</span>
      </div>
      <div className="footer_content">
        <h3>contact information : </h3>
        <div className="footer_content_email">
          <AiOutlineMail />
          <p>woodstokk.contact@woodstokk.fr</p>
        </div>
        <div className="footer_content_phone">
          <AiFillPhone />
          <p>222-333-555</p>
        </div>
      </div>
    </div>
  );
};
