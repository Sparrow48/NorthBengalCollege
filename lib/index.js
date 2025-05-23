import { htmlToText } from 'html-to-text';

export const plainText = (tmlTag) => {
  const htmlContent = tmlTag || '';
  const textContent = htmlToText(htmlContent, {
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true,
  });
  return textContent;
};
