import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cristian Rivera </span>
            from <span className="purple"> Aibonito, Puerto Rico</span>
            <br />I am a Computer Science Student at the University of Puerto Rico at Mayaguez. I am a self-taught Full Stack Web Developer and currently working on some personal projects. I am a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage them to solve real-life problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cybersecurity CTFs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Having Fun
            </li>
          </ul>

          <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
          "Even when you stumble and fall, never lose sight of your resolve. It's not about how many times you fall, but how many times you rise back up. Each setback is not an end, but a new beginning, an opportunity to learn and grow stronger."{" "}
          </p>
          <footer className="blockquote-footer">Cristian J.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
