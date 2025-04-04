import TextUpdater from "./components/TextUpdater";
import SimpleForm from "./components/SimpleForm";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="flex flex-col items-center gap-8 p-10">
      <TextUpdater />
      <SimpleForm />
      <UserCard name="Aditya Dubey" email="Shashidhar.K@vit.com" />
      <Button />
      <LoginForm />
    </div>
  );
}

export default App;
