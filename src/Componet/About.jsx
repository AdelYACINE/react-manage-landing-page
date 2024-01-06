const About = () => {
  return (
    <div className="about">
      <div className="definition">
        <h2 className="title title-about responsive-text">
          What's diffrent about Manage?
        </h2>
        <p className="text responsive-text">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="step">
        <div className="step-containe">
          <span className="num">01</span>
          <div className="container-about-text">
            <h3 className="second-title title-responsive-about">
              Track company-wide progress
            </h3>
            <p className="text text-about">
              See how your day-to-day fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="step-containe">
          <span className="num">02</span>
          <div className="container-about-text">
            <h3 className="second-title title-responsive-about">
              Advenced built in-reports
            </h3>
            <p className="text text-about">
              Set internal delivery estimates and track progress toward company
              goal. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className="step-containe">
          <span className="num">03</span>
          <div className="container-about-text">
            <h3 className="second-title title-responsive-about">
              Everything you need in one place
            </h3>
            <p className="text text-about">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
