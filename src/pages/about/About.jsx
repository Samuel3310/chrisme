import QuickContact from "../../components/QuickContact";

const AboutTop = () => (
  <section className="about-top">
    <div className="wrapper animate--me animate--init">
      <div className="row">
        <div className="col-sm-6-6 col-md-12-12 col-smd-10-12 col-smd-offset-1-12 col-lg-10-12 col-lg-offset-1-12 text-left-center">
          <h5>A few words about me</h5>
          <h1>
            I’m Damian Watracz, a multidisciplinary designer who focuses on
            telling my clients’ stories visually, through enjoyable and
            meaningful experiences. I specialize in responsive websites and
            functional user interfaces.
          </h1>
        </div>
        <div className="col-sm-6-6 col-md-12-12 col-smd-10-12 col-smd-offset-1-12 col-lg-8-12 col-lg-offset-2-12 text-left-center">
          <h3 className="header-light">
            Over the past 9 years I have been working with big companies and
            rising startups around the world as a designer and art director,
            working solo and leading small design teams. In my spare time I{" "}
            <a
              href="https://www.instagram.com/watraczistraveling/"
              target="_blank"
              rel="noopener noreferrer"
            >
              enjoy photography
            </a>{" "}
            and{" "}
            <a
              href="https://www.watraczistraveling.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              motorcycle adventures
            </a>
            .
          </h3>
        </div>
      </div>
    </div>
  </section>
);

const AboutSlider = () => {
  return (
    <section className="about-slider">
      <div className="wrapper">
        <div className="swiper-container swiper-container-with-lines swiper-container-initialized swiper-container-horizontal in-viewport is-autoplay">
          <div className="swiper-wrapper">
            {/* Add your images here */}
            <div className="swiper-slide">
              <img
                alt="About me image"
                className="swiper-lazy swiper-lazy-loaded"
                src="/assets/images/about-aprilia.jpg"
                srcSet="/assets/images/about-aprilia-1024.jpg 1024w, /assets/images/about-aprilia-480.jpg 480w, /images/about-aprilia.jpg 1400w"
              />
            </div>
            {/* Add more swiper-slide items */}
          </div>

          <div className="swiper-pagination swiper-pagination-lines swiper-pagination-clickable swiper-pagination-bullets">
            {/* Pagination */}
            <a
              href="#"
              data-id="0"
              className="swiper-pagination-line img-loaded"
              role="button"
              aria-label="Go to slide 1"
            >
              <span className="swiper-pagination-line-index">01</span>
            </a>
            {/* More pagination items */}
          </div>

          <div
            className="swiper-button-prev"
            role="button"
            aria-label="Previous slide"
          ></div>
          <div
            className="swiper-button-next"
            role="button"
            aria-label="Next slide"
          ></div>
        </div>
      </div>
    </section>
  );
};

const AboutServicesTools = () => {
  return (
    <section className="about-services-tools">
      <div className="wrapper animate--me animate--init">
        <div className="row text-left-center">
          <div className="col-sm-6-6 col-md-5-12 col-md-offset-05-12 col-smd-5-12 col-smd-offset-05-12 col-lg-4-12 col-lg-offset-1-12">
            <h5>Design services</h5>
            <h3>
              Art direction<em> / </em>
              Web &amp; mobile<em> / </em>
              Brand identity<em> / </em>
              UX &amp; UI<em> / </em>
              Iconography<em> / </em>
              Animation<em> / </em>
              Photography
            </h3>
          </div>
          <div className="col-sm-6-6 col-md-5-12 col-md-offset-1-12 col-smd-5-12 col-smd-offset-1-12 col-lg-4-12 col-lg-offset-2-12">
            <h5>Tools I use</h5>
            <h3>
              Photoshop<em> / </em>
              Illustrator<em> / </em>
              Sketch<em> / </em>
              XD<em> / </em>
              InVision<em> / </em>
              UXPin<em> / </em>
              After Effects<em> / </em>
              Premiere Pro<em> / </em>
              Lightroom
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section className="column-list about-experience">
      <div className="wrapper">
        <div className="row animate--me animate--init">
          <div className="col-sm-6-6 col-md-12-12 col-smd-10-12 col-smd-offset-1-12 col-lg-8-12 col-lg-offset-2-12 text-left-center">
            <h5>Experience</h5>
            <h1>Over 9 years of experience</h1>
            <h3 className="header-light">
              I’ve been lucky enough to establish relationships with amazing
              clients from all over the world, ranging from individual clients,
              through up-and-coming startups, to multinational companies. For
              more details, head over to my{" "}
              <a
                href="https://www.linkedin.com/in/damianwatracz"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
              .
            </h3>
          </div>
        </div>

        <div className="list animate--me animate--init">
          <div className="line">
            <div>
              <h4 className="header-dark">Damian Watracz Design</h4>
            </div>
            <div>
              <h4 className="header-light">
                Founder, Creative Director, Designer
              </h4>
            </div>
            <div>
              <h4 className="header-light">October 2010 — Present</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">James Cook Media</h4>
            </div>
            <div>
              <h4 className="header-light">Product / Web / UI / UX Designer</h4>
            </div>
            <div>
              <h4 className="header-light">June 2018 — Present</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">One More Time</h4>
            </div>
            <div>
              <h4 className="header-light">Co-Founder, Web / UI Designer</h4>
            </div>
            <div>
              <h4 className="header-light">December 2015 — Present</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">Estimote via Pilot</h4>
            </div>
            <div>
              <h4 className="header-light">Web / UI / UX Designer</h4>
            </div>
            <div>
              <h4 className="header-light">February 2016 — April 2016</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">James Cook Publishing</h4>
            </div>
            <div>
              <h4 className="header-light">Art Director, Web / UI Designer</h4>
            </div>
            <div>
              <h4 className="header-light">February 2015 — August 2015</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">Fitmo</h4>
            </div>
            <div>
              <h4 className="header-light">Web / UI / UX Designer</h4>
            </div>
            <div>
              <h4 className="header-light">October 2013 — April 2014</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">Line2</h4>
            </div>
            <div>
              <h4 className="header-light">UI / UX Designer</h4>
            </div>
            <div>
              <h4 className="header-light">March 2012 — November 2013</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">OpenDrive</h4>
            </div>
            <div>
              <h4 className="header-light">Web / UI / UX Designer</h4>
            </div>
            <div>
              <h4 className="header-light">October 2011 — May 2014</h4>
            </div>
          </div>
          <div className="line">
            <div>
              <h4 className="header-dark">Invent Group</h4>
            </div>
            <div>
              <h4 className="header-light">Co-Founder, Web / UI Designer</h4>
            </div>
            <div>
              <h4 className="header-light">October 2010 — December 2012</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const clients = [
    {
      src: "assets/images/logo_invision.svg",
      alt: "InVision",
      title: "InVision",
    },
    {
      src: "assets/images/logo_cloudtec.svg",
      alt: "Cloudtec",
      title: "Cloudtec",
    },
    { src: "assets/images/logo_b12.svg", alt: "B12", title: "B12" },
    { src: "assets/images/logo_pmr.svg", alt: "PMR", title: "PMR" },
    {
      src: "assets/images/logo_estimote.svg",
      alt: "Estimote",
      title: "Estimote",
    },
    { src: "assets/images/logo_pilot.svg", alt: "Pilot", title: "Pilot" },
    {
      src: "assets/images/logo_sonicsmith.svg",
      alt: "Sonicsmith",
      title: "Sonicsmith",
    },
    {
      src: "assets/images/logo_james_cook_media.svg",
      alt: "James Cook Media",
      title: "James Cook Media",
    },
    {
      src: "assets/images/logo_project_kazimierz.svg",
      alt: "Project Kazimierz",
      title: "Project Kazimierz",
    },
    {
      src: "assets/images/logo_tedx_kazimierz.svg",
      alt: "TEDx Kazimierz",
      title: "TEDx Kazimierz",
    },
    { src: "assets/images/logo_fitmo.svg", alt: "Fitmo", title: "Fitmo" },
    { src: "assets/images/logo_vordik.svg", alt: "Vordik", title: "Vordik" },
    {
      src: "assets/images/logo_open_drive.svg",
      alt: "OpenDrive",
      title: "OpenDrive",
    },
    { src: "assets/images/logo_line2.svg", alt: "Line2", title: "Line2" },
    {
      src: "assets/images/logo_liveanswer.svg",
      alt: "LiveAnswer",
      title: "LiveAnswer",
    },
    {
      src: "assets/images/logo_safetics.svg",
      alt: "Safetics",
      title: "Safetics",
    },
    {
      src: "assets/images/logo_realtor_pixels.svg",
      alt: "Realtor Pixels",
      title: "Realtor Pixels",
    },
    {
      src: "assets/images/logo_p_and_g.svg",
      alt: "Procter & Gamble",
      title: "Procter & Gamble",
    },
    {
      src: "assets/images/logo_betafirm.svg",
      alt: "Betafirm",
      title: "Betafirm",
    },
    {
      src: "assets/images/logo_vandelay_design.svg",
      alt: "Vandelay Design",
      title: "Vandelay Design",
    },
  ];

  return (
    <section className="about-clients">
      <div className="wrapper">
        <div className="row animate--me animate--init">
          <div className="col-sm-6-6 col-md-12-12 col-smd-10-12 col-smd-offset-1-12 col-lg-8-12 col-lg-offset-2-12 text-left-center">
            <h5>Clients</h5>
            <h1>Some of the brands I’ve worked with</h1>
            <h3 className="header-light">
              Over the past 8 years I’ve had the pleasure to work with customers
              from various sectors on many interesting projects.
            </h3>
          </div>
        </div>
        <div className="list animate--me animate--init">
          {clients.map((client, index) => (
            <div key={index}>
              <img src={client.src} alt={client.alt} title={client.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecognitionSection = () => {
  const recognitions = [
    {
      year: "2016",
      items: [
        {
          text: "Estimote — Graphic design mentor and jury member at the",
          link: "https://www.facebook.com/events/127634600984034",
          linkText: "RealityHack Hackathon",
        },
        {
          text: "Dribbble — Co-organizer of the",
          link: "https://www.facebook.com/dribbblekrakow",
          linkText: "First Dribbble Meetup",
        },
      ],
    },
    {
      year: "2015",
      items: [
        {
          text: "Dribbble — Interview",
          link: "https://dribbble.com/stories/2015/10/14/for-the-win-damian-watracz",
          linkText: "For The Win",
        },
        {
          text: "Vordik — Interview for Vordik, a web and mobile software company from Toronto",
          link: "https://vordik.com/vordik-designer-spotlight-damian-watracz/",
          linkText: "Vordik",
        },
        {
          text: "VandelayDesign — Featured portfolio (Watracz.com) in",
          link: "http://www.vandelaydesign.com/35-portfolio-websites-to-spark-your-inspiration/",
          linkText: "35 Portfolio Websites To Spark Your Inspiration",
        },
        {
          text: "Dribbble — Featured shot published in",
          link: "https://dribbble.com/stories/2015/03/31/replay",
          linkText: "Weekly Replay",
        },
      ],
    },
    {
      year: "2014",
      items: [
        {
          text: "Designinspiration — Featured Dribbble shot",
          link: "https://www.designspiration.net/save/28491713852895/",
          linkText: "Swiss Style Resume 2014",
        },
        {
          text: "Graphic Design Junction — Featured Dribbble shot in",
          link: "http://graphicdesignjunction.com/2014/03/sign-in-login-app-ui-designs/",
          linkText: "32 Modern App Sign In / Login Screen UI Designs",
        },
        { text: "Creattica — Featured portfolio (Watracz.com)" },
      ],
    },
    {
      year: "2013",
      items: [
        {
          text: "Getflywheel — Featured Dribbble profile in",
          link: "https://getflywheel.com/layout/20-dribbble-accounts-we-love/",
          linkText: "20 Web Designer Dribbble Accounts We Love",
        },
        {
          text: "Inspirationfeed — GraphicRiver product (Long Shadow Maker) featured in an",
          link: "http://inspirationfeed.com/long-shadow-design-a-pointless-trend/",
          linkText: "article about long shadow design",
        },
        {
          text: "Noupe — Featured freebie (Free Set of Hand-Drawn Icons) in",
          link: "https://www.noupe.com/essentials/freebies-tools-templates/icons-galore-48-beautiful-and-unusual-icon-sets-free-for-commercial-use-77036.html",
          linkText: "Icons Galore",
        },
        {
          text: "WebdesignerDepot — Featured portfolio (Watracz.com) in",
          link: "https://www.webdesignerdepot.com/2013/02/15-inspiring-galleries/",
          linkText: "15+ Inspiring Galleries",
        },
      ],
    },
    {
      year: "2011",
      items: [
        { text: "StumbleUpon — Featured freebie (Magic 3D Photoshop Action)" },
        {
          text: "WebDesign Tuts+ — Featured ThemeForest product (Clear Theme) in The Best of ThemeForest: June 2011",
        },
        {
          text: "GraphicRiver — Weekly Top Seller author (product for over 8 weeks at #1 place)",
        },
      ],
    },
  ];

  return (
    <section className="column-list about-recognition last">
      <div className="wrapper">
        <div className="row animate--me animate--init">
          <div className="col-sm-6-6 col-md-12-12 col-smd-10-12 col-smd-offset-1-12 col-lg-8-12 col-lg-offset-2-12 text-left-center">
            <h5>Publicity</h5>
            <h1>Events, Interviews, Features, Mentions</h1>
          </div>
        </div>

        <div className="list animate--me animate--init">
          {recognitions.map((recognition, index) => (
            <div key={index} className="line">
              <h2>{recognition.year}</h2>
              {recognition.items.map((item, idx) => (
                <div key={idx}>
                  <p>
                    <strong>{item.text.split(" — ")[0]} —</strong>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkText}
                      </a>
                    ) : (
                      item.text.split(" — ")[1]
                    )}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => (
  <div className="container loaded">
    <AboutTop />
    <AboutSlider />
    <AboutServicesTools />
    <ExperienceSection />
    <ClientsSection />
    <RecognitionSection />
    <QuickContact />
  </div>
);

export default AboutPage;
