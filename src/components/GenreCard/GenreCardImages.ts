import ImageComedy from '/src/assets/images/genre-comedy.jpg';
import ImageAdventure from '/src/assets/images/genre-adventure.jpg';
import ImageDrama from '/src/assets/images/genre-drama.jpg';
import ImageFamily from '/src/assets/images/genre-family.jpg';
import ImageFantasy from '/src/assets/images/genre-fantasy.jpg';
import ImageHistory from '/src/assets/images/genre-history.jpg';
import ImageThriller from '/src/assets/images/genre-thriller.jpg';
import ImageHorror from '/src/assets/images/genre-horror.jpg';
import ImageScifi from '/src/assets/images/genre-scifi.jpg';
import ImageStandup from '/src/assets/images/genre-standup.jpg';
import ImageMystery from '/src/assets/images/genre-mystery.jpg';
import ImageRomance from '/src/assets/images/genre-romance.jpg';
import ImageMusic from '/src/assets/images/genre-music.jpg';
import ImageCrime from '/src/assets/images/genre-crime.jpg';
import ImageTvMovie from '/src/assets/images/genre-tv-movie.jpg';
import ImageDocumentary from '/src/assets/images/genre-documentary.jpg';
import ImageAction from '/src/assets/images/genre-action.jpg';
import ImageWestern from '/src/assets/images/genre-western.jpg';
import ImageAnimation from '/src/assets/images/genre-animation.jpg';
import ImageWar from '/src/assets/images/genre-war.jpg';

import ImageComedy2x from '/src/assets/images/genre-comedy@2x.jpg';
import ImageAdventure2x from '/src/assets/images/genre-adventure@2x.jpg';
import ImageDrama2x from '/src/assets/images/genre-drama@2x.jpg';
import ImageFamily2x from '/src/assets/images/genre-family@2x.jpg';
import ImageFantasy2x from '/src/assets/images/genre-fantasy@2x.jpg';
import ImageHistory2x from '/src/assets/images/genre-history@2x.jpg';
import ImageThriller2x from '/src/assets/images/genre-thriller@2x.jpg';
import ImageHorror2x from '/src/assets/images/genre-horror@2x.jpg';
import ImageScifi2x from '/src/assets/images/genre-scifi@2x.jpg';
import ImageStandup2x from '/src/assets/images/genre-standup@2x.jpg';
import ImageMystery2x from '/src/assets/images/genre-mystery@2x.jpg';
import ImageRomance2x from '/src/assets/images/genre-romance@2x.jpg';
import ImageMusic2x from '/src/assets/images/genre-music@2x.jpg';
import ImageCrime2x from '/src/assets/images/genre-crime@2x.jpg';
import ImageTvMovie2x from '/src/assets/images/genre-tv-movie@2x.jpg';
import ImageDocumentary2x from '/src/assets/images/genre-documentary@2x.jpg';
import ImageAction2x from '/src/assets/images/genre-action@2x.jpg';
import ImageWestern2x from '/src/assets/images/genre-western@2x.jpg';
import ImageAnimation2x from '/src/assets/images/genre-animation@2x.jpg';
import ImageWar2x from '/src/assets/images/genre-war@2x.jpg';

export const getGenreCardImage = (genre: string): string | undefined => {
  switch (genre) {
    case 'comedy': return ImageComedy;
    case 'adventure': return ImageAdventure;
    case 'drama': return ImageDrama;
    case 'family': return ImageFamily;
    case 'fantasy': return ImageFantasy;
    case 'history': return ImageHistory;
    case 'thriller': return ImageThriller;
    case 'horror': return ImageHorror;
    case 'scifi': return ImageScifi;
    case 'stand-up': return ImageStandup;
    case 'mystery': return ImageMystery;
    case 'romance': return ImageRomance;
    case 'music': return ImageMusic;
    case 'crime': return ImageCrime;
    case 'tv-movie': return ImageTvMovie;
    case 'documentary': return ImageDocumentary;
    case 'action': return ImageAction;
    case 'western': return ImageWestern;
    case 'animation': return ImageAnimation;
    case 'war': return ImageWar;
  }

  return undefined;
}

export const getGenreCardImage2x = (genre: string): string | undefined => {
  switch (genre) {
    case 'comedy': return ImageComedy2x;
    case 'adventure': return ImageAdventure2x;
    case 'drama': return ImageDrama2x;
    case 'family': return ImageFamily2x;
    case 'fantasy': return ImageFantasy2x;
    case 'history': return ImageHistory2x;
    case 'thriller': return ImageThriller2x;
    case 'horror': return ImageHorror2x;
    case 'scifi': return ImageScifi2x;
    case 'stand-up': return ImageStandup2x;
    case 'mystery': return ImageMystery2x;
    case 'romance': return ImageRomance2x;
    case 'music': return ImageMusic2x;
    case 'crime': return ImageCrime2x;
    case 'tv-movie': return ImageTvMovie2x;
    case 'documentary': return ImageDocumentary2x;
    case 'action': return ImageAction2x;
    case 'western': return ImageWestern2x;
    case 'animation': return ImageAnimation2x;
    case 'war': return ImageWar2x;
  }

  return undefined;
}