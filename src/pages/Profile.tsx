import { Container, Row, Col, Button } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useEffect } from "react";
import { fetchExperiences, addExperience } from "./../redux/actions/experiences";
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

  useEffect(() => {
    dispatch(fetchProfile('me'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePut = () => {
    const profile_tmp = JSON.parse(JSON.stringify(profile));
    profile_tmp.bio = 'ciao sara';
    dispatch(editProfile(profile_tmp!));
  }

  const handleAddExp = () => {
    const exp1: Experience = {
      role: "santone",
      company: "me stesso",
      startDate: "2019-06-16",
      endDate: null, 									
      description: "Spiego allaggente come vivere",
      area: "Milano",
      username: "andrearagalzi",
      image: "https://picsum.photos/48/48"
    }
    const exp2: Experience = {
      role: "santone",
      company: "me stesso",
      startDate: "2019-06-16",
      endDate: null, 									
      description: "Spiego allaggente come vivere",
      area: "Milano",
      username: "andrearagalzi",
      image: "https://picsum.photos/48/48"
    }
    dispatch(addExperience(profile!._id, exp1));
    dispatch(addExperience(profile!._id, exp2));
  }

  return (
    <Container className="pageContainer" fluid>
      <Row>
        <Col xs={0} md={1} className="d-none d-md-flex"></Col>
        <Col md={1} className="d-none d-lg-flex"></Col>
        <Col xs={12} md={6}>
          <Row className="g-3">
            <Button
              className="btn btn-primary"
              onClick={handlePut}
            >EDIT PROFILE</Button>
            <Button
              className="btn btn-primary"
              onClick={handleAddExp}
            >ADD EXPERIENCE</Button>
            {userExperiences.length > 0 &&
              userExperiences.map((exp: Experience) => {
                return (
                  <div>
                    <p>{exp.description}</p>
                    <p>ciao</p>
                  </div>
                );
              })}
            {userExperiences?.length <= 0 && <p>no experiences</p>}
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <div className="w-100 position-relative z-0 "><img src="https://picsum.photos/800/200" className="w-100 z-0" alt="banner" />
                  <button className="p-0 rounded-circle ms-4 profile-button" style={{ width: "152px", height: "152px" }}> <img src="https://picsum.photos/800/200" className="w-100 h-100 rounded-circle" alt="profile-picture"></img> </button>
                </div>

                <div className="mt-5 mx-4 row">

                  <div className="col-8">

                    <h2>Aonna Ragazzi</h2>
                    <p>Managing Director at TNA Building Services Ltd -- Providing Building maintenance solutions to the block management,
                      social housing and commercial sectors, operating across the country 24 hours a day.</p>
                  </div>
                  <div className="col-4">
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </div>

                </div>


              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white' }} className="border border-1 border-secondary rounded-3">
                <BoxInfo title='Esperienza' />
                <LinkedinMain />
                <hr />
                <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <BoxInfo title='Formazione' />
                <LinkedinMain />
                <hr />
                <LinkedinMain />
                <hr />
                <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <h2>Competenze</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <h2>Lingue</h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2} className="d-none d-md-block">
          <Row className="g-3">
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={1} className="d-none d-md-flex"></Col>
        <Col md={1} className="d-none d-lg-flex"></Col>
      </Row>
      <Row>
        <MyFooter></MyFooter>
      </Row>
    </Container>
  );
};

export default Profile;