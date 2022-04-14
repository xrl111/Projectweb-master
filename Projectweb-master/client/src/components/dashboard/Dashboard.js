import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import DashboardActions from "./DashboardActions"
import Experience from "./Experience"
import Education from "./Education"
import { getCurrentProfile, deleteAccount } from "../../actions/profile"
import styled from "styled-components"
import PersonIcon from "@mui/icons-material/Person"
const ButtonLink = styled(Link)`
  color: #e1e9fc;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  width: 150px;
  background-color: #1e88e5;
  align-items: center;
  justify-content: center;
`
const H1 = styled.h1`
  color: #1e88e5;
  font-size: 30px;
`
const P = styled.p`
  padding: 5px;
  display: flex;
  font-size: 20px;
`
const P1 = styled.p`
  display: flex;
  font-size: 20px;
  padding: 0px 5px 5px 5px; //trlb
`
const Main = styled.section`
  display: flex;
`
const Mid = styled.div`
  flex-direction: column;
  flex: 6;
  width: 100%;
  margin: 20px;
`
const Left = styled.div`
  display: flex;
  flex: 2;
`
const Right = styled.div`
  display: flex;
  flex: 2;
`

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return (
    <>
      <Main>
        <Left></Left>
        <Mid>
          <H1>Dashboard</H1>
          <P>
            <PersonIcon sx={{ fontSize: 30 }} />
            Welcome {user && user.name}
          </P>
          {profile !== null ? (
            <>
              <DashboardActions />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />

              <div className="my-2">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteAccount()}
                >
                  <i className="fas fa-user-minus" /> Delete My Account
                </button>
              </div>
            </>
          ) : (
            <>
              <P1>You have not yet setup a profile, please add some info</P1>
              <ButtonLink to="/create-profile">Create Profile</ButtonLink>
            </>
          )}
        </Mid>
        <Right></Right>
      </Main>
    </>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
)
