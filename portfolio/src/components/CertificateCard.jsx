import React from "react";
import styled from "styled-components";

const CertificateCard = ({ imgSrc }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <img
            src={imgSrc}
            alt="Certificate"
            className="hover:rounded-[20px]"
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 230px;
    height: 163px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all 0.3s;
  }

  .card2 {
    width: 230px;
    height: 160px;
    background-color: #1a1a1a;
    border-radius: ;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export default CertificateCard;
