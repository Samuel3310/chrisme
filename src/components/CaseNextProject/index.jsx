const NextProjectSection = () => {
  return (
    <section className="case-study-next-project" style={{ width: "100%" }}>
      <div>
        <h5>See also</h5>
        <h1 className="large">
          <a href="project/symova" className="internal with-icon">
            Next{" "}
            <span className="keep-together">
              project
              <span className="icon icon-arrow-link icon--on-right">
                <svg>
                  <use xlinkHref="#icon_arrow_link" />
                </svg>
              </span>
            </span>
          </a>
        </h1>
        <p>
          <strong>Symova</strong> — responsive website design
        </p>
      </div>
    </section>
  );
};

export default NextProjectSection;
