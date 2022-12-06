import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import './About.scss';

function About() {
  return (
    <Container className="__container_main" fluid>
      <h4 className="text-center main_title">Team</h4>
      <div className="__main_content">
        <Row xs={1} md={2} lg={4}>

          {/* Dias Nur Ramadhan */}
          <Col>
            <Card className="text-center card">
              <Card.Body>
                <Card.Img variant="top" className="img-fluid rounded-circle" src="https://media-exp1.licdn.com/dms/image/D5603AQGRv7MvkDSRaA/profile-displayphoto-shrink_200_200/0/1667297010885?e=1675900800&v=beta&t=hrzYFCzskkQP8zuCV3V00iaRGDspnIKJd-R0n6PXsRk" />
                <Card.Title className="profile_title">Dias Nur Ramadhan</Card.Title>
              </Card.Body>

              <Stack className="justify-content-center stack" direction="horizontal" gap={2}>
                <a className="socialmedia_links" href="https://github.com/diasramadhan/" target="_blank" rel="noreferrer">
                  <i className="bi bi-github" />
                </a>

                <a className="socialmedia_links" href="https://www.linkedin.com/in/dias-nur-ramadhan-00558b211/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" />
                </a>

                <a className="socialmedia_links" href="https://www.instagram.com/dias_nur_ramadhan/" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram" />
                </a>
              </Stack>
            </Card>
          </Col>

          {/* Rizky Nur Fadhillah */}
          <Col>
            <Card className="text-center card">
              <Card.Body>
                <Card.Img variant="top" className="img-fluid rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQFGYBV9P4lLSw/profile-displayphoto-shrink_200_200/0/1628323400531?e=1675900800&v=beta&t=xbeSgsBsCBSlWizFHl_zaI333RlfBBfEwuUtz-D8rAA" />
                <Card.Title className="profile_title">Rizky Nur Fadhillah</Card.Title>
              </Card.Body>

              <Stack className="justify-content-center stack" direction="horizontal" gap={2}>
                <a className="socialmedia_links" href="https://github.com/rizfadh" target="_blank" rel="noreferrer">
                  <i className="bi bi-github" />
                </a>

                <a className="socialmedia_links" href="https://www.linkedin.com/in/rizfadh" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" />
                </a>

                <a className="socialmedia_links" href="https://www.instagram.com/rzy_fdhlh" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram" />
                </a>
              </Stack>
            </Card>
          </Col>

          {/* Nugroho Wisma Nurpanto */}
          <Col>
            <Card className="text-center card">
              <Card.Body>
                <Card.Img variant="top" className="img-fluid rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQGzURwAf2qQwA/profile-displayphoto-shrink_200_200/0/1657794615770?e=1675900800&v=beta&t=dnrFWfnymdwrhSHJAl-Yit-uHXST9qwlEh_usfkCE_A" />
                <Card.Title className="profile_title">Nugroho Wisma Nurpanto</Card.Title>
              </Card.Body>

              <Stack className="justify-content-center stack" direction="horizontal" gap={2}>
                <a className="socialmedia_links" href="https://github.com/Nugrohowisma/" target="_blank" rel="noreferrer">
                  <i className="bi bi-github" />
                </a>

                <a className="socialmedia_links" href="https://www.linkedin.com/in/nugroho-wisma-nurpanto-bbb041245/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" />
                </a>

                <a className="socialmedia_links" href="https://www.instagram.com/wisma_nugroho19/" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram" />
                </a>
              </Stack>
            </Card>
          </Col>

          {/* Ridho Kuncoro Adji Wibowo */}
          <Col>
            <Card className="text-center card">
              <Card.Body>
                <Card.Img variant="top" className="img-fluid rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4E03AQGS7iScNUhdfw/profile-displayphoto-shrink_200_200/0/1661790251090?e=1675900800&v=beta&t=lBncPwFIdLNzKYAeztraZZghlNaftUYWuZZJSI1Zq54" />
                <Card.Title className="profile_title">Ridho Kuncoro Adji Wibowo</Card.Title>
              </Card.Body>

              <Stack className="justify-content-center stack" direction="horizontal" gap={2}>
                <a className="socialmedia_links" href="https://github.com/kuncoroadjie/" target="_blank" rel="noreferrer">
                  <i className="bi bi-github" />
                </a>

                <a className="socialmedia_links" href="https://www.linkedin.com/in/ridho-kuncoro-adji-wibowo-b0025a245/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" />
                </a>

                <a className="socialmedia_links" href="https://www.instagram.com/kuncr_/" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram" />
                </a>
              </Stack>
            </Card>
          </Col>

        </Row>
      </div>
    </Container>
  );
}

export default About;
