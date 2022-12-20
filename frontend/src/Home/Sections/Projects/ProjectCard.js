import React from "react";
import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Github } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
import { ReactComponent as PGSql } from "../../../Files/svg/postgresql.svg";

import "./style.css";

function ProjectCard(props) {
  const imgHeight = props.width.slice(0, -3) * 0.5625 + "rem";
  return (
    <div class="card shadow rounded" style={{ width: props.width, margin: "30px" }}>
      <img
        src="https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        class="card-img-top"
        alt="..."
        style={{ height: imgHeight }}
      />
      <div class="card-body">
        <h3 class="card-title">{props.project.name}</h3>
        <div class="d-flex flex-row">
          <FontAwesomeIcon style={{ paddingRight: "4", color: "#00d8ff" }} size="2x" icon="fa-brands fa-react" />
          <FontAwesomeIcon
            style={{ paddingLeft: "4", paddingRight: "4", color: "#73B856" }}
            size="2x"
            icon="fa-brands fa-node"
          />
          <PGSql style={{ paddingLeft: "4", paddingRight: "4", width: "35px" }} />
          <FontAwesomeIcon
            style={{
              paddingLeft: "4",
              paddingRight: "4",
              color: "#7411EF",
            }}
            size="2x"
            icon="fa-brands fa-bootstrap"
          />
        </div>
        <p class="card-text">Short Description of the project. Lorem ipsum dolor sit amet</p>

        <div class="d-flex flex-row-reverse">
          <Link href="" underline="none" color="red">
            <Youtube size={25} class="m-1" />
          </Link>
          <Link href="" underline="none" color="black">
            <Github size={25} class="m-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
