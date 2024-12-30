export default function turkishToAscii(text) {
  const map = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ü: "u",
    Ü: "U",
    ş: "s",
    Ş: "S",
    ö: "o",
    Ö: "O",
    ı: "i",
    İ: "I",
  };

  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}
