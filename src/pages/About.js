import React from "react";

class About extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <div
                  className="position-relative"
                  style={{ marginTop: "100px" }}
                >
                  <img
                    src="/images/photo.jpg"
                    className="home-photo"
                    alt="photo"
                  />
                  <div className="home-photo__line"></div>
                </div>
              </div>
              <div className="col-8 mx-auto" style={{ marginTop: "100px" }}>
                <h1
                  style={{
                    color: "#0f172a",
                    fontSize: "38px",
                    marginBottom: "18px",
                  }}
                >
                  Halo saya Muhammad Rafly Chairullah
                </h1>
                <p style={{ color: "#334155", fontSize: "20px" }}>
                  I am a student at Diponegoro University, Semarang, class of
                  2020, undergraduate program in Electrical Engineering. Now I
                  am developing my skills as a front end developer by joining
                  the hacktive8 partner independent campus program.
                </p>
                <p style={{ color: "#334155", fontSize: "20px" }}>
                  I'm insteresting in Web Developing.
                </p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default About;
