import React from 'react';

function Projects() {
  return (
    <div className="page-center">
      <div className="page-content">
        <h1>Projects</h1>
        <ul style={{ textAlign: 'left' }}>
          <li>
            <strong>Brain Tumor Detection:</strong> 
            A deep learning-based system that analyzes MRI scans to detect the presence of brain tumors with high accuracy, using convolutional neural networks (CNN).
          </li>
          <br />
          <li>
            <strong>Patient Registration Form:</strong> 
            A web-based form for hospitals allowing secure patient data entry, record management, and integration with hospital databases using React and Node.js.
          </li>
          <br />
          <li>
            <strong>Number Plate Detection:</strong> 
            A computer vision project that uses OpenCV and machine learning algorithms to detect and recognize vehicle number plates in real-time from CCTV footage.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
