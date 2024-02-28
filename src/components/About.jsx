import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location, techstack } = this.props;
    return (
      <div className="about-container">
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{location}</li>
          <li className="list-group-item">{techstack}</li>
        </ul>
      </div>
    );
  }
}
export default About;
