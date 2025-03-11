export function getRuntimeString(runtime: number): string {
  if (runtime < 60) {
    return `${runtime} мин`;
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  if (minutes < 1) {
    return `${hours} ч`;
  }

  return `${hours} ч ${minutes} мин`;
}

const genreNames: { [key: string]: string } = {
  'history': 'Исторический',
  'horror': 'Ужасы',
  'scifi': 'Научная фантастика',
  'stand-up': 'Выступление',
  'fantasy': 'Фантастика',
  'drama': 'Драма',
  'mystery': 'Мистика',
  'family': "Семейное",
  'comedy': 'Комедия',
  'romance': 'Романтика',
  'music': 'Музыка',
  'crime': 'Криминал',
  'tv-movie': 'TV-фильм',
  'documentary': 'Документальное',
  'action': 'Боевик',
  'thriller': 'Триллер',
  'western': 'Вестерн',
  'animation': 'Мультик',
  'war': 'Война',
  'adventure': 'Приключение'
};

export function getLocalizedGenre(genre: string): string {
  return genre in genreNames
    ? genreNames[genre]
    : genre;
}

export function getLocalizedGenres(genres: string[]): string {
  return genres.map(genre => getLocalizedGenre(genre)).join(' ');
}