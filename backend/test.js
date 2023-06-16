import needle from "needle";

// needle.post(
//   "http://localhost:5000/addquestion",
//   {
//     question: "question",
//     choices: ["a", "b", "c", "d"],
//     correct_answer: 2,
//   },
//   (err, res) => {
//     console.log(res.body);
//   }
// );

// needle.post("http://localhost:5000/deletequestion", { id: "6441ed007911d9e58fdea006" }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/answerquiz", { score: 0 }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/getQuizQuestions", { _id: "6444048dc622c9092d65159f" }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/getquizinfo", { _id: "64441b132f22e519606dc79c" }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/createacc", { username: "Hello", password: "World" }, (err, res) => {
//   console.log(res.body);
// });

// needle.post(
//   "http://localhost:5000/login",
//   { hash: "$2b$10$SCc4XbHFPM8HiiRzHWavgOVKEFnuCrZAx/3lygF.jfwyAYdbbtE/.", password: "World" },
//   (err, res) => {
//     console.log(res.body);
//   }
// );

// needle.post("http://localhost:5000/generatejwt", { username: "jerico", userid: 12345678 }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/verifyjwt", { song: "Lose" }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/createacc", { username: "jek", password: "12345678" }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/login", { username: "jek", password: "12345678" }, (err, res) => {
//   console.log(res.body);
// });

// needle.post("http://localhost:5000/login", { username: "nnn", password: "12345678" }, (err, res) => {
//   console.log(res.body);
//});

// needle.post("http://localhost:5000/createacc", { username: "aaa", password: "12345678" }, (err, res) => {
//   console.log(res.body);
// });

needle.post(
  "http://localhost:5000/generateaiquestions",
  {
    text: "DNA makes RNA makes protein\nIn the first of these processes, DNA sequences are transcribed into messenger RNA (mRNA). Messenger RNA is then translated to specify the sequence of the protein. DNA is replicated when each strand of DNA specifies the sequence of its partner to make two daughter molecules from one parental double-stranded molecule.\nDNA is a polymer—a very large molecule made up of smaller units of four components. Each monomer contains a phosphate and a sugar component. In DNA, the sugar is deoxyribose, and in RNA the sugar is ribose.",
  },
  (err, res) => {
    console.log(res.body);
  }
);
