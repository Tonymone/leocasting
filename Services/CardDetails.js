import React from 'react';
import { useParams } from 'react-router-dom';
import './CardDetails.css'; 

const detailsData = {
  'digital-pr': {
    title: 'Digital PR',
    description: 'Unleash the full potential of your brand with our innovative Digital PR services. Through strategic communication, influencer collaborations, and powerful content, we help you elevate your online presence. Our tailored solutions are designed to foster trust, captivate your audience, and fuel business growth. Let us take your story to new heights, building valuable relationships in the digital world.',
    image: 'https://exampladmedia.com/wp-content/uploads/2024/02/Digital_PR-1170x620-1.jpg'
  },
  'seo-optimization': {
    title: 'SEO Optimization',
    description: 'SEO Optimization enhances your website’s visibility in search engines by improving technical SEO, keyword research, and backlink building.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230824154856/SEO-Search-Engine-Optimisation.png'
  },
  'content-marketing': {
    title: 'Content Marketing',
    description: 'Content Marketing drives engagement through compelling blog posts, videos, infographics, and email campaigns tailored to your audience.',
    image: 'https://exampladmedia.com/wp-content/uploads/2024/02/content-concept-laptop-screen-scaled.jpg'
  }
};

const CardDetails = () => {
  const { serviceId } = useParams(); // Get the dynamic part of the URL
  const details = detailsData[serviceId]; // Get the correct details based on the URL

  if (!details) {
    return <h2>Service not found!</h2>;
  }

  return (
    <div className="card-details">
      <h1>{details.title}</h1>
      <img src={details.image} alt={details.title} className="details-image" />
      <p>{details.description}</p>

      <b>Why partner with LeoCasting?</b>
      <p>We offer unrivaled expertise in Digital PR, ensuring your brand achieves a dynamic online presence while expertly managing your reputation for lasting impact.</p>
    </div>
  );
};

export default CardDetails;
