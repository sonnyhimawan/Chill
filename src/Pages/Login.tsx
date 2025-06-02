import LoginForm from '../components/organism/FormLogin';

const Login = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/image/img/bg-login.jpg')" }}
    >
      <div className="bg-background bg-opacity-80 p-6 rounded-lg w-full max-w-md m-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
