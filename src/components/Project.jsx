import React from 'react'
import './Project.css'
import { MdVideoLibrary } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

export default function Project(props) {
  const { project } = props;
  return (
    <div className="pj-item-con">
      <img src={project.img} />
      <div className="pj-item-info">
        <h1>{project.title}</h1>
        <p>{project.txt}</p>
        <div className="tech-stack">Tech stack: {project.tech}</div>
        <div className="pj-link-con">
          <div className="pj-link-item" style={{display:project.video === "" ? 'none' : 'block'}}>
            <MdVideoLibrary fill='black' />
            <a href={project.video}>Video Preview</a>
          </div>
          <div className="pj-link-item" style={{display:project.github === "" ? 'none' : 'block'}}>
            <FaGithub fill='black' />
            <a href={project.github}>View Code</a>
          </div>
        </div>
      </div>
    </div>
  )
}
