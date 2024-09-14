import React from 'react';
import Card from './Card'; // Assuming the Card component is in the same folder
import { FaLaptop } from "react-icons/fa"; 
import { TiDeviceLaptop } from "react-icons/ti";
import { TfiWrite } from "react-icons/tfi";
import { MdLibraryBooks } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { MdOutlineUpdate } from "react-icons/md";

const cardDetails = [
  {
    Icon: FaLaptop,
    title: "Digital PR",
    points: [
      "Online Reputation Management",
      "Brand Visibility Enhancement",
      "Influencer Outreach Strategies",
      "Content Amplification Tactics",
      "Social Media Engagement Boosters"
    ],
    buttonText: "Read More",
    hreff: "/services/digital-pr" // Internal link
  },
  {
    Icon: TiDeviceLaptop,
    title: "SEO Optimization",
    points: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Backlink Building",
      "Performance Tracking"
    ],
    buttonText: "Learn More",
    hreff: "/services/seo-optimization" // Internal link
  },
  {
    Icon: TfiWrite,
    title: "Content Marketing",
    points: [
      "Content Strategy",
      "Copywriting & Blogging",
      "Video Content Creation",
      "Infographic Design",
      "Email Marketing"
    ],
    buttonText: "Explore More",
    hreff: "/services/content-marketing" // Internal link
  },
  {
    Icon: MdOutlineUpdate,
    title: "Weekly PR Update",
    points: [
      "Content Strategy",
      "Copywriting & Blogging",
      "Video Content Creation",
      "Infographic Design",
      "Email Marketing"
    ],
    buttonText: "Explore More",
    hreff: "https://docs.google.com/spreadsheets/d/1YtoS3tHcSuIRP4cCxm6ZI_NVAE04V8RLgaz0yXmS-8k/edit?usp=drivesdk"
  },
  {
    Icon: MdLibraryBooks,
    title: "Examplad PR Media pdf",
    points: [
      "Content Strategy",
      "Copywriting & Blogging",
      "Video Content Creation",
      "Infographic Design",
      "Email Marketing"
    ],
    buttonText: "PDF File",
    hreff: "https://drive.google.com/file/d/1X3DRiokMShRnXNYgDzkKY1zd8gRKYR65/view?usp=drivesdk"
  },
  {
    Icon: SiBookstack,
    title: "PR Bulk Packages",
    points: [
      "Content Strategy",
      "Copywriting & Blogging",
      "Video Content Creation",
      "Infographic Design",
      "Email Marketing"
    ],
    buttonText: "PDF File",
    hreff: "https://drive.google.com/drive/folders/1Jf9WmsKCArCC02Ran42Wv8Sf2rZHd2gn"
  },
];

const CardList = () => {
  return (
    <div className="card-list" style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {cardDetails.map((card, index) => (
        <Card
          key={index}
          Icon={card.Icon}
          title={card.title}
          points={card.points}
          buttonText={card.buttonText}
          hreff = {card.hreff}
        />
      ))}
    </div>
  );
};

export default CardList;
