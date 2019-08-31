import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Alert from "../shared/Error/Alert"


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      errors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  errorHandler = () => {
    const errors = [];
    const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const emailIsValid = regEmail.test(this.state.email)
    if (this.state.email === "") {
      errors.push("Please enter an email address to register.")
    }
    if (!emailIsValid) {
      errors.push("Please enter a valid email address to register.")
    }
    if (this.state.password === "") {
      errors.push("Please enter a password to register.")
    }
    if (this.state.password.length < 8) {
      errors.push("Please enter a valid password to register.")
    }
    if (this.state.firstName === "") {
      errors.push("Please enter a first name to register.")
    }
    if (this.state.lastName === "") {
      errors.push("Please enter a last name to register.")
    }
    this.setState({ errors: errors })
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.errorHandler();
    if (this.state.errors.length === 0) {
      this.props
        .onSubmit(this.state)
        .then(() => this.props.history.push("/assignments"));
    }
  }

  render() {
    return (
      <div>
        <main className="container">
          <section className="row justify-content-md-center">
            <div className="col col-lg-5">
              <h1>Signup</h1>
            </div>
          </section>
          {this.state.errors.length === 0 ? (
            ""
          ) : (
            <Alert error={this.state.errors} />
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                onChange={this.handleChange}
                name="email"
                type="text"
                value={this.state.email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                onChange={this.handleChange}
                name="password"
                type="password"
                value={this.state.password}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-control"
                id="firstName"
                onChange={this.handleChange}
                name="firstName"
                type="text"
                value={this.state.firstName}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="form-control"
                id="lastName"
                onChange={this.handleChange}
                name="lastName"
                type="text"
                value={this.state.lastName}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </main>
      </div>
    );
  }
}
export default withRouter(Signup);