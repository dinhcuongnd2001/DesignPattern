// {
//     '200': 'OK',
//     '201': 'Created',
//     '202': 'Accepted',
//     '203': 'Non-Authoritative Information',
//     '204': 'No Content',
//     '205': 'Reset Content',
//     '400': 'Bad Request',
//     '401': 'Unauthorized',
//   }

// hanlde with if-else
// const ResultStatus = (number) => {
//   if (number == 200) {
//     return "OK";
//   } else if (number == 201) {
//     return "Created";
//   } else if (number == 202) {
//     return "Accepted";
//   } else {
//     return "No Code";
//   }
// };

// handle with switch-case

// const ResultStatus = (number) => {
//   switch (number) {
//     case 200:
//       return "OK";
//     case 201:
//       return "Created";
//     default:
//       return "No Code";
//   }
// };

// hanlde with new way

// const reasonPhraseCode = {
//   200: "OK",
//   201: "Created",
//   202: "Accepted",
//   203: "Non-Authoritative Information",
//   204: "No Content",
//   205: "Reset Content",
//   400: "Bad Request",
//   401: "Unauthorized",
//   ["default"]: "no code",
// };

// const ResultStatus = (code) =>
//   reasonPhraseCode[code] || reasonPhraseCode["default"];

// handle with new Map()

const reasonPhraseCode = new Map([
  ["200", "OK"],
  ["201", "Created"],
  ["default", "No Code"],
]);

const ResultStatus = (code) =>
  reasonPhraseCode.get(code) || reasonPhraseCode.get("default");

console.log(ResultStatus("200"));
console.log(reasonPhraseCode);
