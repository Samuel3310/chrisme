const CaseStudyPhotos = () => {
  const images = [
    {
      src: "/assets/images/triniso-01.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-01-1024.jpg 1024w, /assets/images/triniso-01-480.jpg 480w, /assets/images/triniso-01.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-02.png",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-02-1024.png 1024w, /assets/images/triniso-02-480.png 480w, /assets/images/triniso-02.png 1400w",
    },
    {
      src: "/assets/images/triniso-03.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-03-1024.jpg 1024w, /assets/images/triniso-03-480.jpg 480w, /assets/images/triniso-03.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-04.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-04-1024.jpg 1024w, /assets/images/triniso-04-480.jpg 480w, /assets/images/triniso-04.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-05.png",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-05-1024.png 1024w, /assets/images/triniso-05-480.png 480w, /assets/images/triniso-05.png 1400w",
    },
    {
      src: "/assets/images/triniso-06.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-06-480.jpg 480w, /assets/images/triniso-06.jpg 670w",
    },
    {
      src: "/assets/images/triniso-07.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-07-480.jpg 480w, /assets/images/triniso-07.jpg 670w",
    },
    {
      src: "/assets/images/triniso-08.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-08-1024.jpg 1024w, /assets/images/triniso-08-480.jpg 480w, /assets/images/triniso-08.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-09.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-09-1024.jpg 1024w, /assets/images/triniso-09-480.jpg 480w, /assets/images/triniso-09.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-10.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-10-1024.jpg 1024w, /assets/images/triniso-10-480.jpg 480w, /assets/images/triniso-10.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-11.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-11-1024.jpg 1024w, /assets/images/triniso-11-480.jpg 480w, /assets/images/triniso-11.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-12.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-12-480.jpg 480w, /assets/images/triniso-12.jpg 670w",
    },
    {
      src: "/assets/images/triniso-13.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-13-480.jpg 480w, /assets/images/triniso-13.jpg 670w",
    },
    {
      src: "/assets/images/triniso-14.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-14-1024.jpg 1024w, /assets/images/triniso-14-480.jpg 480w, /assets/images/triniso-14.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-15.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-15-1024.jpg 1024w, /assets/images/triniso-15-480.jpg 480w, /assets/images/triniso-15.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-16.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-16-1024.jpg 1024w, /assets/images/triniso-16-480.jpg 480w, /assets/images/triniso-16.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-17.png",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-17-1024.png 1024w, /assets/images/triniso-17-480.png 480w, /assets/images/triniso-17.png 1400w",
    },
    {
      src: "/assets/images/triniso-18.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-18-1024.jpg 1024w, /assets/images/triniso-18-480.jpg 480w, /assets/images/triniso-18.jpg 1400w",
    },
    {
      src: "/assets/images/triniso-19.jpg",
      alt: "Triniso Case Study",
      srcSet:
        "/assets/images/triniso-19-1024.jpg 1024w, /assets/images/triniso-19-480.jpg 480w, /assets/images/triniso-19.jpg 1400w",
    },
  ];

  return (
    <section className="case-study-photos">
      <div className="wrapper">
        <div className="row">
          {images.map((image, index) => (
            <div
              key={index}
              className="col-sm-6-6 col-md-12-12 col-smd-12-12 col-lg-12-12"
            >
              <div
                className="lazyload-wrapper loaded animate--init"
                style={{ paddingBottom: `${index % 2 === 0 ? 67.86 : 57.14}%` }}
              >
                <img
                  alt={image.alt}
                  className="lazy loaded"
                  data-srcset={image.srcSet}
                  data-src={image.src}
                  src={image.src}
                  srcSet={image.srcSet}
                  data-was-processed="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPhotos;
