import React, { useState } from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { setAlert } from "../../actions/alert"
import { register } from "../../actions/auth"
import PropTypes from "prop-types"
import { H1, Form, FormLog, Input, Button, P, Label } from "./Registerstyle"
import PersonIcon from "@mui/icons-material/Person"
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert("Passwords do not match", "danger")
    } else {
      register({ name, email, password })
      alert("Submit success")
    }
  }

  // if (isAuthenticated) {
  //   // return <Navigate to="/dashboard" />
  //   alert("Submit success")
  // }

  return (
    <FormLog>
      <Form onSubmit={onSubmit}>
        <H1>Sign Up</H1>
        <P>
          <PersonIcon sx={{ fontSize: 30 }} /> Create New Account
        </P>
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
        />
        <small className="form-text">
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email
        </small>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Label>Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />

        <Button type="submit" value="Register" />
        {/* <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p> */}
      </Form>
    </FormLog>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { setAlert, register })(Register)
