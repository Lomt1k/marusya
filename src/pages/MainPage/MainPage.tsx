import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";

const MainPage = () => {
  return (
    <main>
      <h1>Main Page</h1>
      <p>Welcome to the main page</p>
      <Button>О фильме</Button>
      <Button secondary>О фильме</Button>
      <Input type='email' name='test' placeholder='Электронная почта' icon={<div>XX</div>} />
      <Input type='email' name='test' placeholder='Электронная почта' icon={<div>XX</div>} dark />
    </main>
  )
}

export default MainPage;