import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      experience: 7,
    };
  }
  render() {
    const { name, location, techstack } = this.props;
    const { count, experience } = this.state;
    return (
      <div className="about-container">
        <ul className="list-group">
          <li className="list-group-item">Name : {name}</li>
          <li className="list-group-item">Location : {location}</li>
          <li className="list-group-item">Tech Stack : {techstack}</li>
          <li className="list-group-item">Experience : {experience}</li>
          <li className="list-group-item">Count : {count}</li>
          <li className="list-group-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                console.log("increase count clicked....");
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              Click Increase Count By 1
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default About;
