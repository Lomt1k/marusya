export default class StringHelper {
  public static truncateText(text: string, digits: number): string {
    if (text.length <= digits) {
      return text;
    }
  
    text = text.substring(0, digits);
    // Удаляем последнее слово, т.к. при обрезании через substring могли обрезать на половине слова
    return StringHelper.removeLastWord(text).trimEnd() + '...';
  }

  public static removeLastWord(text: string): string {
    return text.replace(/\s+\S+$/, '');
  }

  public static toUsd(number: number): string {
    if (isNaN(number)) {
      return 'Неизвестно';
    }

    return '$' + number.toLocaleString();
  }
}