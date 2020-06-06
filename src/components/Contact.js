import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import RubberBand from "react-reveal/RubberBand";
import Rotate from "react-reveal/Rotate";
import Reveal from "react-reveal/Reveal";

export default function Contact() {
  return (
    <div className="bg-contact w-100">
      <div className="intro w-100 h-100 d-flex align-items-center row">
        <div className="container w-100 ">
          <div className="col-lg-12 text-light mb-4 w-75 mx-auto" id="contact">
            <RubberBand>
              <h1 className="text-center my-4">Contact Me</h1>
            </RubberBand>
            <Rotate top left>
              <p>
                {" "}
                <FontAwesomeIcon icon={faStar} className="text-success" />
                <strong style={{ fontSize: "20px" }}>
                  {" "}
                  If you are interested in my profile or need any further
                  information and request, please contact me:
                </strong>
              </p>
            </Rotate>
            <div className="row">
              <Slide left>
                <div className="col-lg-6">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-success"
                    />{" "}
                    17/15 Binh Hung, Binh Chanh, Ho Chi Minh city.
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="text-success"
                    />{" "}
                    0778-340-357
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-success"
                    />{" "}
                    nhuhung19@gmail.com
                  </p>
                </div>
              </Slide>
              <Slide right>
                <div className="col-lg-6">
                  <a
                    className="social-icon px-2"
                    href="https://www.facebook.com/nhoctieuquy.9x"
                  >
                    <span>
                      <FaFacebook />
                    </span>
                  </a>
                  <a
                    className="social-icon px-2"
                    href="https://github.com/nhuhung19"
                  >
                    <span>
                      <FaGithub />
                    </span>
                  </a>
                  <a className="social-icon px-2" href="">
                    <span>
                      <FaTwitter />
                    </span>
                  </a>
                  <a className="social-icon px-2" href="">
                    <span>
                      <FaInstagram />
                    </span>
                  </a>
                </div>
              </Slide>
            </div>
          </div>
          <Slide bottom>
            <Form className="col-lg-12 h-75 text-light mx-auto w-75">
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="tet" placeholder="Last Name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Slide>
          <div className="d-flex justify-content-center">
            <div className="text-light ">
              © Hung-Portfolio 2020 . All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
