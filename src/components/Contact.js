import React from "react";
import "../style/contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <>
      <img className="pin" src="./about/maps/circle.png" alt="pin" />
      <div className="contact" />
      <div className="card">
        <div className="c_txt_container">
          <button className="c_txt">
            <a
              className="c_txt"
              href="mailto:payushityagi1510@gmail.com"
              rel="noreferrer"
            >
              payushityagi1510@gmail.com
            </a>
          </button>
          <button
            className="c_txt"
            onClick={() => {
              window.open("https://wa.me/+919896844922");
            }}
          >
            +91 8950926399
          </button>
          {/* <button
            className="c_txt"
            onClick={() => {
              window.open("https://wa.me/+905536441452");
            }}
          >
            +905 53 644 14 52
          </button> */}
        </div>

        <div className="c_btn_container">
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://www.instagram.com/");
            }}
          >
            <InstagramIcon />
          </button>
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://www.linkedin.com/in/");
            }}
          >
            <LinkedInIcon />
          </button>
          <button
            className="c_btn"
            onClick={() => {
              window.open("https://github.com/");
            }}
          >
            <GitHubIcon />
          </button>
        </div>
      </div>
    </>
  );
}
