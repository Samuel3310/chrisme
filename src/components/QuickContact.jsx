import React from "react";

const QuickContact = () => {
  return (
    <section className="quick-contact">
      <div className="wrapper text-left-center animate--me animate--init">
        <h5>Need a designer?</h5>
        <h1 className="large">
          <a href="contact.html" className="internal with-icon">
            Let’s work <span className="keep-together">together</span>
            <span className="icon icon-arrow-link icon--on-right">
              <svg>
                <use xlinkHref="#icon_arrow_link"></use>
              </svg>
            </span>
          </a>
        </h1>
      </div>
    </section>
  );
};

export default QuickContact;
