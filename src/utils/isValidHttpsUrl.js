export default function isValidHttpsUrl(url) {
    const httpsUrlPattern = /^https:\/\/([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/.*)?$/;
    return httpsUrlPattern.test(url);
  }