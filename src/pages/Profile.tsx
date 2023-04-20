import { Container, Row, Col, Button } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useState, useEffect } from "react";
import {
  fetchExperiences,
  addExperience,
  deleteExperience,
  fetchExperience,
  editExperience,
} from "./../redux/actions/experiences";
import { fetchProfile, editProfile, fetchProfiles } from "../redux/actions/profileActions";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import { Experience } from "../types/expCardTypes";
import LinkedinMain from "../components/LinkedinMain";
import BoxInfo from "../components/BoxInfo";


const Profile = () => {
  const dispatch = store.dispatch;
  const profile = useSelector(
    (state: RootState) => state.profile.selected
  );
  const userExperiences = useSelector(
    (state: RootState) => state.experience.list
  );
  const selectedExperience = useSelector(
    (state: RootState) => state.experience.selected)

  return (
    <Container className="pageContainer">
      <Row>
        <Col xs={12} md={9} className="mainColumn">
          <Row className="g-3">
            {userExperiences?.length <= 0 && <p>no experiences</p>}
            <Col xs={12}>
              <div className="sectionContainer profileHero">
                <div className="profileImgs">
                  <img
                    src="https://picsum.photos/800/200"
                    className="profileBanner"
                    alt="banner"
                  />
                  <button className="profileButton">
                    <img
                      src="https://picsum.photos/800/200"
                      alt="profile"
                      className="profilePic"
                    ></img>
                  </button>
                </div>

                <Row className="mt-5 mx-4 row">

                  {profile ? <div className="col-8">

                    <h2>{profile.name} {profile.surname} </h2>
                    <p>{profile.title}</p>
                    <p>{profile.area}</p>
                  </div> : <></>}
                  <Col className="col-4">
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            {profile ? <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white' }} className="border border-1 border-secondary rounded-3">
                <BoxInfo title='Informazioni' />
                <p>{profile.bio}</p>
              </div>
            </Col> : <></>}
            <Col xs={12}>
              <div className="sectionContainer">
                <BoxInfo title="Esperienza" />
                <LinkedinMain />
                <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <BoxInfo title="Formazione" />
                <LinkedinMain />
                <LinkedinMain />
                <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Competenze</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Lingue</h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="d-none d-md-block">
          <Row className="g-3">
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Esperienza</h2>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <MyFooter></MyFooter>
      </Row>
    </Container>
  );
};

export default Profile;