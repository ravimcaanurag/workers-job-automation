import React from "react";
import { ConnectedProps, connect } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { dispatchSetIsLoading, setIsLoading, workJobState } from "../redux/WorkersJob.redux";
import { PrintMessage } from "../Common/model";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  isLoading: (state: RootState) => state.workJobs.isLoading,
});

const mapDispatchToProps = {
    dispatchSetIsLoading
};

const connector = connect(mapStateToProps, mapDispatchToProps);  
type FirstProps = ConnectedProps<typeof connector>;

class FirstC extends React.PureComponent<FirstProps> {

    componentDidMount():void {
        this.props.dispatchSetIsLoading(false);
      }

  render(): React.ReactNode {   
    
    return <>
    <button onClick={()=>{this.props.dispatchSetIsLoading(true)}}>Load</button>
    {this.props.isLoading ? "Yes" : "No"}
    </>;
  }
}

// Connect your component
export const First = connector(FirstC);
