import React, { Fragment } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { logout } from "../../actions/auth"
import styled from "styled-components"
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp"
import HomeIcon from "@mui/icons-material/Home"
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import CategoryIcon from "@mui/icons-material/Category"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
import MenuIcon from "@mui/icons-material/Menu"
import CodeIcon from "@mui/icons-material/Code"
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice"
import PersonIcon from "@mui/icons-material/Person"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
const Nav = styled.div`
  background: #4267b2;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SidebarNav = styled.div`
  background: #4267b2;
  width: 170px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`

const SideBarWarp = styled.div`
  width: 100%;
`

const Button = styled.button`
  margin-left: 2rem;
  font-size: 2rem;
  height: 33px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const CloseIcon = styled.a`
  margin-top: 2rem;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`
const SidebarLabel = styled.label`
  margin-left: 16px;
`
const NavLeft = styled.div`
  flex: 1;
  display: flex;
`
const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  color: white;
  margin-right: 30px;
`
const NavLogo = styled.div`
  flex: 4;
  display: flex;
  align-items: right;
  justify-content: space-around;
  color: white;
`
const Blogo = styled(Link)`
  color: #f4f4f4;
`
const LoginIcon1 = styled.span`
  color: white; //trbl
  text-decoration: none;
`
const LoginLink = styled(Link)`
  display: flex;
  flex-direction: column;
`
const LoginF = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserName = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-size: 20px;
  margin-top: 10px;
`
const A = styled.span`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #f44336;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`
const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  const authLinks = (
    <>
      <SidebarLink to="/dashboard">
        <PersonIcon />
        <SidebarLabel>Profiles</SidebarLabel>
      </SidebarLink>
      <A onClick={logout} href="#!">
        <LogoutIcon />
        <SidebarLabel>Logout</SidebarLabel>
      </A>

      <SidebarLink to="/profiles">
        <CodeIcon />
        <SidebarLabel>Developers</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/posts">
        <LocalPostOfficeIcon />
        <SidebarLabel>Posts</SidebarLabel>
      </SidebarLink>

      <SidebarLink to="/Home">
        <HomeIcon />
        <SidebarLabel>Home</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/Loginin">
        <ModeEditOutlineIcon />
        <SidebarLabel>Register</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/NewIdea">
        <LightbulbIcon />
        <SidebarLabel>NewIdea</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/Category">
        <CategoryIcon />
        <SidebarLabel>Category</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/Manage">
        <ManageAccountsIcon />
        <SidebarLabel>Manage</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/Date">
        <AccessTimeFilledIcon />
        <SidebarLabel>Date</SidebarLabel>
      </SidebarLink>
      {/* <SidebarLink to="/DashBoard">
            <DashboardCustomizeIcon />
            <SidebarLabel>DashBoard</SidebarLabel>
          </SidebarLink> */}
    </>
  )

  const guestLinks = (
    <>
      <SidebarLink to="/profiles">
        <CodeIcon />
        <SidebarLabel>Developers</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/register">
        <ModeEditOutlineIcon />
        <SidebarLabel>Register</SidebarLabel>
      </SidebarLink>
      <SidebarLink to="/login">
        <LoginIcon />
        <SidebarLabel>Login</SidebarLabel>
      </SidebarLink>
    </>
  )

  return (
    <>
      <Nav>
        <NavLeft>
          <Button onClick={showSidebar}>
            <MenuIcon color="primary" fontSize="large" />
          </Button>
        </NavLeft>
        <NavLogo>
          <h1>
            <Blogo to="/">GreenWich</Blogo>
          </h1>
        </NavLogo>
        <NavRight></NavRight>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SideBarWarp>
          <CloseIcon onClick={showSidebar}>
            <CloseSharpIcon fontSize="large" variant="contained" />
          </CloseIcon>

          {/* <LoginF>
            <LoginLink to="/Login">
              <LoginIcon>
                <AccountCircleSharpIcon fontSize="large" variant="contained" />
              </LoginIcon>
            </LoginLink>
            <UserName>Name</UserName>
          </LoginF> */}

          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        </SideBarWarp>
      </SidebarNav>
    </>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)
