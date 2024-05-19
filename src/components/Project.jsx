import React from 'react'
import './Project.css'
import { MdVideoLibrary} from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

export default function Project() {
  return (
    <div className="section-project-con">
      <h1>Projects</h1>
      <p>Thing I've built so far</p>
      <div className="project-items-grid">
        <div className="pj-item-con">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_d_nLYPCaQPKbsEjYTeSnINp_7F0hL2J8Q&usqp=CAU" alt="" />
          <div className="pj-item-info">
            <h1>Project tile goes here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime hic perferendis nulla beatae, vel a voluptatibus molestiae ullam. Labore?</p>
            <div className="tech-stack">Tech stack: HTML, JavaScript, CSS</div>
            <div className="pj-link-con">
              <div className="pj-link-item">
                <MdVideoLibrary fill='black'/>
                <a href="">Video Preview</a>
              </div>
              <div className="pj-link-item">
                <FaGithub fill='black'/>
                <a href="">View Code</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pj-item-con">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_d_nLYPCaQPKbsEjYTeSnINp_7F0hL2J8Q&usqp=CAU" alt="" />
          <div className="pj-item-info">
            <h1>Project tile goes here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime hic perferendis nulla beatae, vel a voluptatibus molestiae ullam. Labore?</p>
            <div className="tech-stack">Tech stack: HTML, JavaScript, CSS</div>
            <div className="pj-link-con">
              <div className="pj-link-item">
                <MdVideoLibrary fill='black'/>
                <a href="">Video Preview</a>
              </div>
              <div className="pj-link-item">
                <FaGithub fill='black'/>
                <a href="">View Code</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pj-item-con">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_d_nLYPCaQPKbsEjYTeSnINp_7F0hL2J8Q&usqp=CAU" alt="" />
          <div className="pj-item-info">
            <h1>Project tile goes here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime hic perferendis nulla beatae, vel a voluptatibus molestiae ullam. Labore?</p>
            <div className="tech-stack">Tech stack: HTML, JavaScript, CSS</div>
            <div className="pj-link-con">
              <div className="pj-link-item">
                <MdVideoLibrary fill='black'/>
                <a href="">Video Preview</a>
              </div>
              <div className="pj-link-item">
                <FaGithub fill='black'/>
                <a href="">View Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
