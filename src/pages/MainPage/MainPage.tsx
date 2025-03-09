import Button from "../../components/ui/Button/Button";

const MainPage = () => {
  return (
    <main>
      <h1>Main Page</h1>
      <p>Welcome to the main page</p>
      <Button>О фильме</Button>
      <Button disabled>О фильме</Button>
      <Button secondary>О фильме</Button>
      <Button secondary disabled>О фильме</Button>
    </main>
  )
}

export default MainPage;