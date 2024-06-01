import React, { FormEvent } from "react";
import {
  Stack,
  TextField,
  PrimaryButton,
  Dropdown,
  initializeIcons,
  IDropdownOption,
} from "@fluentui/react";
import { ConnectedProps, connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./WorkersJob.style.css";
import { RootState } from "../redux/store";
import { dispatchSetUserRegistration } from "../redux/WorkersJob.redux";

initializeIcons();

const mapStateToProps = createStructuredSelector({
  userRegistration: (state: RootState) => state.workJobs.userRegistration,
});

const mapDispatchToProps = { dispatchSetUserRegistration };

const connector = connect(mapStateToProps, mapDispatchToProps);
type RegistrationProps = ConnectedProps<typeof connector>;

class RegistrationC extends React.PureComponent<RegistrationProps> {
  componentDidMount(): void {}

  render(): React.ReactNode {
    const { userRegistration } = this.props;

    const jobOptions = [
      { key: "developer", text: "Developer" },
      { key: "designer", text: "Designer" },
      { key: "manager", text: "Manager" },
      { key: "engineer", text: "Engineer" },
    ];

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
              width: 400,
              padding: "2em",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: 8,
              backgroundColor: "#ffffff",
            },
          }}
        >
          <Stack horizontalAlign="center" className="mb-4">
            <h4>New Registration</h4>
          </Stack>
          <TextField
            label="First Name"
            placeholder="Enter your first name"
            value={userRegistration.firstName}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetUserRegistration({
                ...userRegistration,
                firstName: newValue || "",
              })
            }
          />
          <TextField
            label="Last Name"
            placeholder="Enter your last name"
            value={userRegistration.lastName}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetUserRegistration({
                ...userRegistration,
                lastName: newValue || "",
              })
            }
          />
          <TextField
            label="User Name"
            placeholder="Enter your username"
            value={userRegistration.userName}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetUserRegistration({
                ...userRegistration,
                userName: newValue || "",
              })
            }
          />
          <TextField
            label="Email"
            placeholder="Enter your email"
            value={userRegistration.email}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetUserRegistration({
                ...userRegistration,
                email: newValue || "",
              })
            }
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={userRegistration.password}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetUserRegistration({
                ...userRegistration,
                password: newValue || "",
              })
            }
          />
          <TextField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={userRegistration.confirmPassword}
            onChange={(
              _event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string | undefined
            ) =>
              this.props.dispatchSetUserRegistration({
                ...userRegistration,
                confirmPassword: newValue || "",
              })
            }
          />
          <Dropdown
            label="Work Center"
            placeholder="Select your work center"
            options={jobOptions}
            selectedKey={userRegistration.jobId}
            onChange={(
              event: React.FormEvent<HTMLDivElement>,
              option?: IDropdownOption | undefined
            ) => {
              this.props.dispatchSetUserRegistration({
                ...userRegistration,
                jobId: (option!.key || "") as string,
              });
            }}
          />
          <PrimaryButton
            text="Register"
            styles={{ root: { width: "100%", borderRadius: 4, marginTop: 16 } }}
            onClick={this.handleRegister}
          />
        </Stack>
      </Stack>
    );
  }

  private handleRegister = () => {
    alert(JSON.stringify(this.props.userRegistration));
  };
}

// Connect your component
export const Registration = connector(RegistrationC);
