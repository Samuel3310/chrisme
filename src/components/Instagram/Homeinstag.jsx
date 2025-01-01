import React from "react";
import "./index.css";
const instagramPosts = [
  {
    id: "2285070878138013243_258980345",
    link: "",
    imageSrc: "/assets/images/instag3.png",
    description: `I'm happy to announce that my website has been featured on Flux channel by Ran
    Segall in the "TOP 5 STUNNING PORTFOLIO WEBSITES" YouTube video! 🤩
    It took me by surprise as I was already a subscriber to the channel, and while
    watching this video to take a look at some inspirations I suddenly saw my face... 😅
    Follow the link (LINK IN BIO) to hear what Ran has to tell about my website (the
    second one, around 4:25). Thanks @ransegall , I'm happy that it received such a
    positive feedback! 😁🍾
    <a href="https://www.youtube.com/watch?v=R7aM6s-x1c0" target="_blank" rel="noopener noreferrer">
      Watch on YouTube
    </a>`,
    likesCount: 78,
  },
  {
    id: "2199460356202596400_258980345",
    link: "",
    imageSrc: "/assets/images/instag2.png",
    description: `I just published a new case study on my portfolio! 😁 Please check link in my bio. 
    It is quite an old project but since I had the case study almost complete, I decided
    to finish it and put on my website. I hope that you will like it! 😊
    Project info:
    Less Doing, More Living was a conference about productivity and entrepreneurship
    hosted by Ari Meisel, author of two bestselling books: “The Art of Less Doing” and 
    “The Replaceable Founder”. The event lasted for three days and took place in the
    Scholastic Building in the heart of Manhattan, New York.
    From the design perspective, the goal was to create an elegant, simple and engaging
    website focused on selling the conference tickets; the website was meant to have a
    checkout form and provide information about the event, the speakers, schedule, and
    venue. `,
    likesCount: 77,
  },
  {
    id: "2120333558135533764_258980345",
    link: "",
    imageSrc: "/assets/images/instag1.png",
    description: `Getting back to work after a long vacation is never easy 🙃 After several weeks in
    Iceland and Faroe Islands I really missed the green color so I decided to put some
    flowers in my home office. By some I mean over 20 😅 There are several benefits of
    having green plants in your workspace: they clean the air, increase productivity and
    reduce stress levels. I will test that in upcoming weeks when working on some new
    projects 😉`,
    likesCount: 54,
  },
];

const HomeInstagram = () => {
  return (
    <section className="home-instagram">
      <div className="wrapper">
        <div className="animate--me animate--init">
          <h5>What's new?</h5>
          <h1 className="large">Latest on Instagram</h1>
        </div>
        <div className="list animate--me animate--init">
          {instagramPosts.map((post) => (
            <div className="list-item-portfolio" key={post.id}>
              <a
                data-id={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="image_cont"
              >
                <div className="lazyload-wrapper loaded">
                  <img
                    src={post.imageSrc}
                    className="lazy loaded"
                    alt="Instagram Post"
                  />
                </div>
                <strong className="image_display">
                  <span
                    className="image_text"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      MozBoxOrient: "vertical",
                      display: "-webkit-box",
                      WebkitLineClamp: 6,
                    }}
                  >
                    {post.description}
                  </span>
                  <span className="count">
                    <span>{post.likesCount}</span>
                  </span>
                </strong>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInstagram;
