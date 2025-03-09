import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import TextButton from '../../components/ui/TextButton/TextButton';

const MainPage = () => {
  return (
    <main>
      <h1>Main Page</h1>
      <p>Welcome to the main page</p>
      <Button onClick={() => {}}>О фильме</Button>
      <Button onClick={() => {}} secondary>О фильме</Button>
      <Input type='email' name='test' placeholder='Электронная почта' icon={<div>XX</div>} />
      <Input type='email' name='test' placeholder='Электронная почта' icon={<div>XX</div>} dark />
      <TextButton onClick={() => {}}>Регистрация</TextButton>
    </main>
  )
}

export default MainPage;