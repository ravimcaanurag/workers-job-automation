import React, { FormEvent } from "react";
import {
  Stack,
  TextField,
  PrimaryButton,
  DefaultButton,
  Link,
  initializeIcons,
} from "@fluentui/react";
import { ConnectedProps, connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./WorkersJob.style.css";
import {
  dispatchSetPassword,
  dispatchSetUserName,
} from "../redux/WorkersJob.redux";
import { RootState } from "../redux/store";
import logo from "./../assets/logoWorkers.png"

initializeIcons();

const mapStateToProps = createStructuredSelector({
  login: (state: RootState) => state.workJobs.login,
  userNameError:(state:RootState)=>state.workJobs.userNameError,
  passwordError:(state:RootState)=>state.workJobs.passwordError,
});

const mapDispatchToProps = { dispatchSetUserName, dispatchSetPassword };

const connector = connect(mapStateToProps, mapDispatchToProps);
type LoginProps = ConnectedProps<typeof connector>;

class LoginC extends React.PureComponent<LoginProps> {
  componentDidMount(): void {}

  render(): React.ReactNode {
    const { login,userNameError,passwordError } = this.props;

    return (
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{ root: { height: "100vh", backgroundColor: "#f3f2f1" } }}
      >
        <Stack
          tokens={{ childrenGap: 20 }}
          styles={{
            root: {
              width: 350,
              padding: "2em",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: 8,
              backgroundColor: "#ffffff",
            },
          }}
        >
          <Stack horizontalAlign="center" className="mb-4">
            <img src={logo} alt="Logo" style={{ }} />
          </Stack>
          <TextField
            label="User name"
            type="email"
            placeholder="Enter email"
            styles={{ fieldGroup: { borderRadius: 4 } }}
            value={login.userName}
            onChange={this._onUserNameChange}
            errorMessage={userNameError}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            styles={{ fieldGroup: { borderRadius: 4 } }}
            value={login.password}
            onChange={this._onPasswordChange}
            errorMessage={passwordError}
          />
          <PrimaryButton
            text="Login"
            styles={{ root: { width: "100%", borderRadius: 4, marginTop: 16 } }}
            disabled={userNameError?.trim().length>0 || passwordError?.trim().length>0}
          />
          <Stack
            horizontal
            tokens={{ childrenGap: 10 }}
            horizontalAlign="center"
            styles={{ root: { marginTop: 16 } }}
          >
            <Link href="#" styles={{ root: { textDecoration: "none" } }}>
              Forgot Password
            </Link>
          </Stack>
          <Stack
            horizontal
            tokens={{ childrenGap: 10 }}
            horizontalAlign="center"
            styles={{ root: { marginTop: 16 } }}
          >
            <span>Don't have an account?</span>
            <DefaultButton styles={{ root: { marginLeft: 5, marginTop: -5 } }}>
              Sign up
            </DefaultButton>
          </Stack>
        </Stack>
      </Stack>
    );
  }

  private _onUserNameChange = (
    _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined
  ) => {
    this.props.dispatchSetUserName(newValue as string);
  };

  private _onPasswordChange = (
    _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined
  ) => {
    this.props.dispatchSetPassword(newValue as string);
  };
}

// Connect your component
export const Login = connector(LoginC);
