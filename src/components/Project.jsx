import React, { useState, useEffect } from 'react';
import './Project.css';
import { MdVideoLibrary } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

export default function Project(props) {
  const { project } = props;
  const [isModalOpen, setModalOpen] = useState(false); // State สำหรับ modal
  const [modalImage, setModalImage] = useState(null); // เก็บ URL ของรูปใน modal

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setModalImage(null), 300); // Delay ให้ animation ปิดเสร็จ (300ms)
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // ปิดการ scroll ของ body
    } else {
      document.body.style.overflow = ''; // คืนค่า overflow ของ body
    }

    // เมื่อ component ถูก unmount หรือ modal ปิด, คืนค่า overflow ให้เป็นปกติ
    return () => {
      document.body.style.overflow = ''; // คืนค่า overflow
    };
  }, [isModalOpen]); // การทำงานจะเปลี่ยนทุกครั้งที่ isModalOpen เปลี่ยน

  return (
    <div className="pj-item-con">
      <img 
        src={project.img} 
        alt={project.title} 
        onClick={() => openModal(project.img)} 
        style={{ cursor: 'pointer' }}
      />
      <div className="pj-item-info">
        <h1>{project.title}</h1>
        <p>{project.txt}</p>
        <div className="tech-stack">Tech stack: {project.tech}</div>
        <div className="pj-link-con">
          <div className="pj-link-item" style={{ display: project.video === "" ? 'none' : 'flex' }}>
            <MdVideoLibrary fill="black" />
            <a href={project.video} target="_blank" rel="noopener noreferrer">Video Preview</a>
          </div>
          <div className="pj-link-item" style={{ display: project.github === "" ? 'none' : 'flex' }}>
            <FaGithub fill="black" />
            <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className={`modal-overlay ${isModalOpen ? 'open' : 'close'}`} onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Large Preview" />
          </div>
        </div>
      )}
    </div>
  );
}
