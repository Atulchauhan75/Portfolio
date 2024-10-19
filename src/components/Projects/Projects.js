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
              title="Food-Villa"
              description="A web application that allows users to explore a restaurant menu with ease. Built using React and Redux, it offers a smooth interface for browsing dishes and customizing selections. The focus is on delivering a seamless user experience through dynamic state management and a clean, engaging design, without backend functionality."
              ghLink="https://github.com/Atulchauhan75/FoodVilla"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Video Streaming WebApp"
              description="Built a video streaming app using React and Redux, integrating live APIs for search suggestions to enhance real-time results. Created user-friendly interfaces with category-based displays for smoother navigation. Optimized state management to improve data retrieval and elevate the overall user experience."
              ghLink="https://github.com/Atulchauhan75/YOUTUBE-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
