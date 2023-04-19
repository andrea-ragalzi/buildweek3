import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Col, Image, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../style/App.scss";

export const CustomNavbar = () => {
  const [Rightcollapse, setRightcollapse] = useState(false);

  return (
    <header className="myNavbar">
      <Navbar bg="light" expand="sm">
        <Container>
          <Container>
            <Row className="innerNavbar">
              <Col xs={8} sm={3} lg={6} className="justify-content-start">
                <Navbar.Brand>
                  <NavLink to={"/"}>
                    <Image
                      src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                      alt="linkedin"
                      id="logoNavbar"
                    />
                  </NavLink>
                </Navbar.Brand>
                <Form>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Form>
              </Col>
              <Col xs={4} sm={9} lg={6} className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="linkWrap">
                    <NavLink to={"/"}>
                      <i className="bi bi-house-fill"></i>
                      <p className="d-none d-lg-block">Home</p>
                    </NavLink>
                    <NavLink to={"/"}>
                      <i className="bi bi-people-fill"></i>
                      <p className="d-none d-lg-block">Rete</p>
                    </NavLink>
                    <NavLink to={"/"}>
                      <i className="bi bi-briefcase-fill"></i>
                      <p className="d-none d-lg-block">Lavoro</p>
                    </NavLink>
                    <NavLink to={"/"}>
                      <i className="bi bi-chat-dots-fill"></i>
                      <p className="d-none d-lg-block">Messaggistica</p>
                    </NavLink>
                    <NavLink to={"/"}>
                      <i className="bi bi-bell-fill"></i>
                      <p className="d-none d-lg-block">Notifiche</p>
                    </NavLink>
                    <NavDropdown
                      title={
                        <div className="dropdown-title">
                          <Image
                            id="myProfile"
                            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                          ></Image>
                          <p>Tu</p>
                        </div>
                      }
                      id="basic-nav-dropdown"
                    >
                      <Row>
                        <Col xs={3} className="p-0">
                          <img
                            src="https://picsum.photos/50/50"
                            alt="Foto dropdowns"
                          />
                        </Col>
                        <Col xs={8} className="offset-1">
                          <div>
                            <p>
                              <b>Martin Linke-din</b>
                            </p>
                            <p>Ruolo Lavorativo</p>
                          </div>
                        </Col>
                        <Col xs={12}>
                          <NavDropdown.Item className="d-flex justify-content-center">
                            <Button className="btnWhite px-2">
                              Visualizza profilo
                            </Button>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col xs={12}>
                          <p>
                            <b>Account</b>
                          </p>
                        </Col>
                        <Col xs={12}>
                          <NavDropdown.Item>
                            <p className="linkBehave">
                              {" "}
                              🟨<b>Prova Premium gratis</b>
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave">Impostazioni e Privacy</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave">Guida</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave">Lingua</p>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col xs={12}>
                          <p>
                            <b>Gestisci</b>
                          </p>
                        </Col>
                        <Col xs={12}>
                          <NavDropdown.Item>
                            <p className="linkBehave">Post e attività</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave">
                              Account per la pubblicazione di offerte
                            </p>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col xs={12}>
                          <NavDropdown.Item>
                            <p className="linkBehave">Esci</p>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Container>
      </Navbar>
    </header>
  );
};
