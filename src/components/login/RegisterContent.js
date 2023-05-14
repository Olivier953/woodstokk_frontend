import Button from '../../utils/Button';
import Input from '../../utils/Input';

const RegisterContent = ({ fields, handleRegister, handleSubmit }) => {
  return (
    <div className="registration">
      <div className="registration_content">
        <div className="registration_information">
          <div className="registration_information_personal">
            <p>Personal Information</p>
            <div className="registration_information_personal_names">
              <Input
                className="registration_input_names"
                type="text"
                name="firstName"
                placeholder="Your name"
                value={fields?.firstName}
                onChange={handleRegister}
              />
              <Input
                className="registration_input_names"
                type="text"
                name="lastName"
                placeholder="Your lastname"
                value={fields?.lastName}
                onChange={handleRegister}
              />
            </div>
            <div className="registration_information_personal_email">
              <Input
                className="registration_input_email"
                type="email"
                name="email"
                placeholder="Your email"
                value={fields?.email}
                onChange={handleRegister}
              />
            </div>
          </div>
          <div className="registration_information_account">
            <p>Account Information</p>
            <div className="registration_information_account_password">
              <Input
                className="registration_input_password"
                type="password"
                name="password"
                placeholder="Your password"
                value={fields?.password}
                onChange={handleRegister}
              />
              <Input
                className="registration_input_password"
                type="password"
                name="password"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <Button
            className="registration_button"
            label="create your account"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterContent;
