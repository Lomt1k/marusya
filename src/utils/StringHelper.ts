export default class StringHelper {
  public static truncateText(text: string, digits: number) {
    if (text.length <= digits) {
      return text;
    }
  
    text = text.substring(0, digits);
    // Удаляем последнее слово, т.к. при обрезании через substring могли обрезать на половине слова
    return StringHelper.removeLastWord(text) + '...';
  }

  public static removeLastWord(text: string) {
    return text.replace(/\s+\S+$/, '');
  }
}