import RandomMovieSection from '../../components/MovieSection/RandomMovieSection';
import Heading from '../../components/ui/Heading/Heading';

const MainPage = () => {

  return (
    <main>
      <Heading level={1} visual='hidden'>
        Маруся - стриминговый сервис для поиска фильмов
      </Heading>
      <RandomMovieSection />
    </main>
  )
}

export default MainPage;