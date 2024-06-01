import React from "react";
import { initializeIcons, Text, Stack } from "@fluentui/react";
import { ConnectedProps, connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./WorkersJob.style.css";

initializeIcons();

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type HomeProps = ConnectedProps<typeof connector>;

class HomeC extends React.PureComponent<HomeProps> {
  componentDidMount(): void {}

  render(): React.ReactNode {
    const {} = this.props;

    return (
      <div className="App">
        <div className="card-container">
          <div className="white-card">
            <div className="white-card-header">Card-1</div>
            <div className="white-card-content">Content-1</div>
          </div>
          <div className="white-card">
            <div className="white-card-header">Card-2</div>
            <div className="white-card-content">Content-2</div>
          </div>
          <div className="white-card">
            <div className="white-card-header">Card-3</div>
            <div className="white-card-content">Content-3</div>
          </div>
        </div>
      </div>
    );
  }
}

// Connect your component
export const Home = connector(HomeC);
