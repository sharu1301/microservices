import React from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";

export default function Description() {
  const navigate = useNavigate()
  return (
    <div className="descContainer">
      <div className={'weAreTheContainer'}>
        <p className={'weAreThe1'}>We Are the Name of the Trust When It</p>
        <p className={'comesToIndustrialMachinery'}>
          <span>{`Comes to `}</span>
          <span className={'industrialMachinery'}>
            Industrial Machinery
          </span>
        </p>
      </div>
      <div className={'hindsMachinesA1'}>
        Hinds Machines, a prominent name in the field of industrial machinery,
        has been a pioneer in the development and manufacturing of cutting-edge
        injection molding solutions for various industries. With a legacy
        spanning decades, the company has consistently demonstrated a commitment
        to innovation, precision engineering, and customer satisfaction.
      </div>
      <div className={'moreAboutUsParent'} onClick={() => navigate("/about")}>
        <div className={'moreAboutUs1'} >more about us</div>
      </div>
    </div>
    
  );
}
