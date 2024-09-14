import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="responsive-container-block bigContainer">
            <div className="responsive-container-block Container bottomContainer">
                <div className="ultimateImg">
                    <img className="mainImg" src="./Images/Cinema.jpg" alt="woman" />
                    <div className="purpleBox">
                        <p className="purpleText">
                            Leo Casting
                        </p>
                        <img className="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg" alt="Stars" />
                    </div>
                </div>
                <div className="allText bottomText">
                    <p className="text-blk headingText">
                        About Me
                    </p>
                    <p className="text-blk subHeadingText">
                    Leo Casting, initiated by three entrepreneurs - Mihir, Vibhav, and Mansi
                    </p>
                    <p className="text-blk description">
                        Leo Casting, initiated by three intellectuals - Mihir, Vibhav, and Mansi, epitomizes a distinguished status as India's premier casting agency, specializing in Films, TV serials, and nationwide Advertising Campaigns. Our agency boasts a profound understanding of the intricate Modelling & Acting realm.

                        Under the astute supervision of our highly seasoned Casting Directors and bolstered by proficient Talent Coordination, Administration, and Studio teams, we meticulously nurture each artist for excellence. Serving as a linchpin in the entertainment industry, we facilitate connections between actors, models, and diverse talents with casting directors and producers, spanning various projects such as films, TV shows, commercials, and beyond.

                        We assume a pivotal role in the selection process, orchestrating auditions and meticulously presenting suitable candidates for specific roles in television, films, and advertisements. Leo Casting is more than an agency; it is a liberating space for actors to authentically express themselves. Our portfolio proudly includes collaborations with esteemed brands like Reliance, Tilda Rice, Grofers, Runwal, ITC Hotels, and more, operating seamlessly in the vibrant cities of Delhi and Mumbai.

                        Our handpicked talents receive expert guidance, channeling their potential into performances that resonate profoundly with the audience. Promoting collaboration, we curate a diverse team that includes Fashion Photographers, Advertising Photographers, studios, makeup artists, Talent Managers, and forged Production House alliances, all converging harmoniously under our roof. Your profile is meticulously crafted to showcase not just your talents but also the essence of your unique capabilities.          </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
