import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="full-height px-md-5 spacing">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8">
              <h6 className="text-brand">ABOUT</h6>
              <h1 className="heading">My Education And Experience.</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <p>
                  I am a CSE student with specilaization in Health Informatics.
                  I am Aditi Sahu 3rd year btech student of VIT, Bhopal. I am
                  a geek and curious human besides being an OpenSource
                  enthusiast. I am a keen learner and I have participated in coding coemption(SIH). I’m a hardworking
                  and optimistic person. I'm very curious and I love learning
                  new things. I'm good at team work and believe in healthy
                  competition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="full-height px-md-5 spacing">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8">
              <h6 className="text-brand">SKILLS</h6>
              <h1 className="heading">Skills that I have</h1>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-4">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className="las la-thumbtack"></i>
                </div>
                <h4>Frontend developement</h4>
                <p>
                  HTML, CSS and Javascript.
                </p>
                <a href="#" className="link-custom">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className="las la-thumbtack"></i>
                </div>
                <h4>Backend developement</h4>
                <p>
                  Nodejs.
                </p>
                <a href="#" className="link-custom">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className="las la-thumbtack"></i>
                </div>
                <h4>Machine Learning</h4>
                <p>
                  I, design and create the AI algorithms capable of learning and
                  making predictions that define machine learning (ML).
                </p>
                <a href="#" className="link-custom">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
