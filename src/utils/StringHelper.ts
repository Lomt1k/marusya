export default class StringHelper {
  public static truncateText(text: string, digits: number) {
    if (text.length < digits) {
      return text;
    }
  
    return text
      .substring(0, digits)
      .replace(/[\s.,;!?()]+$/, '')
      + '...';
  }
}