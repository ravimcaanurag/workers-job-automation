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
  dispatchSetLogin,
  dispatchSetLoginValidations,
} from "../redux/WorkersJob.redux";
import { RootState } from "../redux/store";
import logo from "./../assets/logoWorkers.png";
import { isEmpty, isValidateEmail } from "../Common/Utils";

initializeIcons();

const mapStateToProps = createStructuredSelector({
  login: (state: RootState) => state.workJobs.login,
  loginValidations: (state: RootState) => state.workJobs.loginValidations,
});

const mapDispatchToProps = { dispatchSetLogin, dispatchSetLoginValidations };

const connector = connect(mapStateToProps, mapDispatchToProps);
type LoginProps = ConnectedProps<typeof connector>;

class LoginC extends React.PureComponent<LoginProps> {
  componentDidMount(): void {}

  render(): React.ReactNode {
    const { login, loginValidations } = this.props;

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
            <img src={logo} alt="Logo" style={{}} />
          </Stack>
          <TextField
            label="User name"
            type="email"
            placeholder="Enter email"
            styles={{ fieldGroup: { borderRadius: 4 } }}
            value={login.userName}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetLogin({
                ...login,
                userName: newValue || "",
              })
            }
            onBlur={() => {
              let validationMessage = "";

              if (!login.userName) {
                validationMessage = "Enter User Name";
              }             
              this.props.dispatchSetLoginValidations(
                loginValidations.set("UserName", validationMessage)
              );
            }}
            errorMessage={this.getValidationMessage("UserName")}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            styles={{ fieldGroup: { borderRadius: 4 } }}
            value={login.password}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetLogin({
                ...login,
                password: newValue || "",
              })
            }
            onBlur={() => {
              let passwordValidation = "";
              if (!login.password || isEmpty(login.password)) {
                passwordValidation = "Please enter Password";
              }
              this.props.dispatchSetLoginValidations(
                loginValidations.set("Password", passwordValidation)
              );
            }}
            errorMessage={this.getValidationMessage("Password")}
          />
          <PrimaryButton
            text="Login"
            styles={{ root: { width: "100%", borderRadius: 4, marginTop: 16 } }}
            disabled={false}
            onClick={this.handleLogin}
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

  private handleLogin = () => {
    alert(JSON.stringify(this.props.login));
  };

  private getValidationMessage = (validationKey: string) => {
    const { loginValidations } = this.props;
    //alert(JSON.stringify(loginValidations))

    if (loginValidations.has(validationKey)) {
      return loginValidations.get(validationKey);
    }

    return "";
  };
}

// Connect your component
export const Login = connector(LoginC);
