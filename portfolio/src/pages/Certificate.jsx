import React from "react";
import { useTheme } from "../context/ThemeContext";
import LeftComponent from "../components/LeftComponent";
import certificate1 from "../assets/certificate_1.png";
import certificate2 from "../assets/certificate_2.png";
import certificate3 from "../assets/certificate_3.png";
import certificate4 from "../assets/certificate_4.png";
import certificate5 from "../assets/certificate_5.jpg";
import certificate6 from "../assets/certificate_6.jpg";
import CertificateCard from "../components/CertificateCard";

const Certificate = () => {
  const theme = useTheme();
  const certificateData = [
    certificate4,
    certificate5,
    certificate1,
    certificate2,
    certificate3,
    certificate6,
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8 ">
          <LeftComponent />
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 mx-4 mt-8 ">
            {certificateData.map((certificate, index) => (
              <CertificateCard key={index} imgSrc={certificate} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
