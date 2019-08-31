import React from "react";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { assignment = {} } = this.props;
    const { title = "", description = "", url = "" } = assignment;
    this.state = { title, description, url };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { assignment } = this.props;

    if (assignment && assignment._id) {
      const body = Object.assign({}, this.state, { _id: assignment._id });
      this.props.onSubmit(body);
    } else {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              id="title"
              onChange={this.handleChange}
              name="title"
              type="text"
              value={this.state.title}
              required
            />
          </div>
          <div className="form-group  ">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              onChange={this.handleChange}
              name="description"
              type="text"
              value={this.state.description}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Project Link</label>
            <input
              className="form-control"
              id="url"
              onChange={this.handleChange}
              name="url"
              type="text"
              value={this.state.url}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(Form);