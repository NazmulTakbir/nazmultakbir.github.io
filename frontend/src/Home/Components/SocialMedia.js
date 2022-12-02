import React from "react";
import { Link } from "@mui/material";

import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";

function SocialMedia() {
  const style = {
    marginTop: "10px",
  };
  return (
    <div class="container text-center" style={style}>
      <Link href="" underline="none" color="#f7f7f7">
        <Github size={25} class="m-1" />
      </Link>
      <Link href="" underline="none" color="#f7f7f7">
        <Linkedin size={25} class="m-1" />
      </Link>
      <Link href="" underline="none" color="#f7f7f7">
        <Youtube size={25} class="m-1" />
      </Link>
      <Link href="" underline="none" color="#f7f7f7">
        <Twitter size={25} class="m-1" />
      </Link>
    </div>
  );
}

export default SocialMedia;
