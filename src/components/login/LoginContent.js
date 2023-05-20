import { RegisterLink } from '../../styled-component/StyledLink';
import Button from '../../utils/Button';
import Input from '../../utils/Input';

const LoginContent = ({ fields, handleLogin, handleSubmit }) => {
  return (
    <div className="login">
      <div className="login_content">
        <div className="login_content_registerPart">
          <div className="login_content_registerPart_font">
            <p>New Customer ?</p>
            <span>
              Post haec Gallus Hierapolim profecturus ut expeditioni specie
              tenus adesset, Antiochensi plebi suppliciter obsecranti ut inediae
              dispelleret metum, quae per multas difficilisque causas adfore.
            </span>
          </div>
          <div className="login_registerBtn">
            <RegisterLink to="/register">create my account</RegisterLink>
          </div>
        </div>
        <div className="login_content_loginForm">
          <p>Registered customer</p>
          <span>If you already have an account, please login.</span>
          <Input
            className="login_input_email"
            type="email"
            name="email"
            placeholder="Your email"
            value={fields?.email}
            onChange={handleLogin}
          />
          <Input
            className="login_input_password"
            type="password"
            name="password"
            placeholder="Your password"
            value={fields?.password}
            onChange={handleLogin}
          />
          <Button
            className="login_loginBtn"
            label="Login"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
