import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { login } from "../../actions/auth"
import { Main, Form, Button, Input, H1, P, Label } from "../auth/Loginstyle"
import PersonIcon from "@mui/icons-material/Person"
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <Main>
      <Form className="form" onSubmit={onSubmit}>
        <H1>Sign In</H1>
        <P>
          <PersonIcon sx={{ fontSize: 30 }} /> Sign Into Your Account
        </P>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
        />

        <Button type="submit" className="btn btn-primary" value="Login" />
        {/* <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p> */}
      </Form>
    </Main>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
