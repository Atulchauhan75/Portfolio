import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ChatStream from "../../Assets/Projects/ChatStream.png";
import WeatherApp from "../../Assets/Projects/WeatherApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatStream}
              isBlog={false}
              title="ChatStream"
              description="A Web Application that enables real-time chat functionality for users. Users can send and receive messages instantly using Firebase, ensuring seamless communication with friends and family."
              ghLink="https://github.com/krishnash1355/ChatStream"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="WeatherApp"
              description="A Web Application that provides real-time weather updates for various locations. Users can search for current weather conditions and detailed forecasts for any city around the globe easily."
              ghLink="https://github.com/krishnash1355/react-weather-app-master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
