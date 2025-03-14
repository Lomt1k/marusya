import { Movie } from "../../../api/Movie";
import LanguageHelper from "../../../utils/LanguageHelper";

export interface MovieAboutData {
  param: string;
  value: string | null | undefined;
}

export const prepareAboutData = (movie?: Movie): MovieAboutData[] => {
  return [
    {
      param: 'Язык оригинала',
      value: movie?.language ? LanguageHelper.getLanguageName(movie.language) : undefined
    },
    {
      param: 'Бюджет',
      value: movie?.budget
    },
    {
      param: 'Выручка',
      value: movie?.revenue
    },
    {
      param: 'Режиссёр',
      value: movie?.director
    },
    {
      param: 'Продакшен',
      value: movie?.production
    },
    {
      param: 'Награды',
      value: movie?.awardsSummary
    },
  ]
}