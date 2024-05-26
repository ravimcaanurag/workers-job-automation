import React, { FormEvent } from 'react';
import { Stack, TextField, PrimaryButton, Dropdown, initializeIcons, IDropdownOption } from '@fluentui/react';
import { ConnectedProps, connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './WorkersJob.style.css';

initializeIcons();

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type RegistrationProps = ConnectedProps<typeof connector>;

interface RegistrationState {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  jobs: string[];
}

class RegistrationC extends React.PureComponent<RegistrationProps, RegistrationState> {
  constructor(props: RegistrationProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      jobs: []
    };
  }

  componentDidMount(): void {}

  handleRegister = () => {
    // Handle registration logic here
    console.log("Registration form submitted", this.state);
  };

  render(): React.ReactNode {
    const jobOptions = [
      { key: 'developer', text: 'Developer' },
      { key: 'designer', text: 'Designer' },
      { key: 'manager', text: 'Manager' },
      { key: 'engineer', text: 'Engineer' },
    ];

    return (
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{ root: { height: '100vh', backgroundColor: '#f3f2f1' } }}
      >
        <Stack
          tokens={{ childrenGap: 20 }}
          styles={{
            root: {
              width: 400,
              padding: '2em',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: 8,
              backgroundColor: '#ffffff',
            },
          }}
        >
          <Stack horizontalAlign="center" className="mb-4">
            <h4>New Registration</h4>
          </Stack>
          <TextField
            label="First Name"
            placeholder="Enter your first name"
            value={this.state.firstName}
            onChange={(_event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
              this.setState({ firstName: newValue || "" })
            }
          />
          <TextField
            label="Last Name"
            placeholder="Enter your last name"
            value={this.state.lastName}
            onChange={(_event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
              this.setState({ lastName: newValue || "" })
            }
          />
          <TextField
            label="User Name"
            placeholder="Enter your username"
            value={this.state.userName}
            onChange={(_event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
              this.setState({ userName: newValue || "" })
            }
          />
          <TextField
            label="Email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={(_event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
              this.setState({ email: newValue || "" })
            }
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={(_event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
              this.setState({ password: newValue || "" })
            }
          />
          <TextField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={this.state.confirmPassword}
            onChange={(_event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
              this.setState({ confirmPassword: newValue || "" })
            }
          />
          <Dropdown
            label="Work Center"
            placeholder="Select your work center"
            options={jobOptions}
            selectedKeys={this.state.jobs}
            multiSelect
            onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined) => {
              if (option) {
                this.setState(prevState => ({
                  jobs: prevState.jobs.includes(option.key as string)
                    ? prevState.jobs.filter(job => job !== option.key)
                    : [...prevState.jobs, option.key as string]
                }));
              }
            }}
          />
          <PrimaryButton
            text="Register"
            styles={{ root: { width: '100%', borderRadius: 4, marginTop: 16 } }}
            onClick={this.handleRegister}
          />
        </Stack>
      </Stack>
    );
  }
}

// Connect your component
export const Registration = connector(RegistrationC);
