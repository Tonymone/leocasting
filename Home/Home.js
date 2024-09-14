import React from 'react';
import './Home.css';
import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";

function Home() {
    const row1 = [
        "https://1000logos.net/wp-content/uploads/2021/08/Reliance-Industries-Limited-RIL-Logo-1966.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JrgUSvtHTVukrRBiq2dIvLGuoTKRkb6VfwvurpbX_Q&s",
        "https://www.propmart.co/wp-content/uploads/2019/07/runwal-logo.png",
        "https://mir-s3-cdn-cf.behance.net/projects/404/b4a16a151761919.Y3JvcCw5MDAsNzAzLDAsOTg.jpg",
        "https://logolook.net/wp-content/uploads/2023/09/Colgate-Logo.png",
        "https://www.nurseryrhymesnursery.co.uk/img/logo-trans.png",
    ];

    const row2 = [
        "https://images.news18.com/ibnlive/uploads/2021/12/iqoo.jpg",
        "https://pbs.twimg.com/profile_images/1336630471317286912/m1E6fhoz_400x400.jpg",
        "https://logowik.com/content/uploads/images/t-series3119.logowik.com.webp",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/ITCs%20Hotel%20Group.png",
        "https://upload.wikimedia.org/wikipedia/commons/0/0d/Tira_logo.webp",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
    ];

    return (
        <>
            <header className="header1">
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Get cast in your next role today.</span>
                        <span className="heading-primary-sub">LeoCasting has the most jobs, the best tools, and expert advice to help you get cast.</span>
                    </h1>
                    <NavLink to="/audition-form" className="btn">Get Started</NavLink>
                </div>
            </header>

            <BrandContainer>
                <Wrapper>
                    <Text>With Great Outcomes.</Text>
                    <Note>Our customers have gotten offers from awesome companies.</Note>
                    <Marquee>
                        <MarqueeGroup>
                            {row1.map((el) => (
                                <ImageGroup key={el}>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup>
                            {row1.map((el) => (
                                <ImageGroup key={el}>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                    <Marquee>
                        <MarqueeGroup2>
                            {row2.map((el) => (
                                <ImageGroup key={el}>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup2>
                        <MarqueeGroup2>
                            {row2.map((el) => (
                                <ImageGroup key={el}>
                                    <Image src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup2>
                    </Marquee>
                </Wrapper>
            </BrandContainer>
        </>
    );
}

const BrandContainer = styled.div`
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    margin-bottom: 130px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    // width: 200%;
    padding: 10px;
  }
`;

const Text = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: wheat;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Note = styled.div`
  font-size: 1.125rem;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  user-select: none;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;

  @media (max-width: 768px) {
    width: 250%;
  }
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(8rem, 1rem + 20vmin, 20rem);
  padding: calc(clamp(8rem, 1rem + 15vmin, 20rem) / 10);

`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default Home;
