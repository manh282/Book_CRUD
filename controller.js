const BookRepository = require('./book-repository');
const mysqlConnection = require('./config');

// const bookRepos = new BookRepository(mysqlConnection);
//
// exports.insert = (req, res, next) => {
//     bookRepos.insert(req.data)
//         .then(() => {
//             res.status(200).json({message:"Done!"});
//         }).catch(next)
// };
//
// exports.finAll = (req, res, next) => {
//   bookRepos.findAll()
//       .then((result) => {
//           res.status(200).json(result);
//       })
//       .catch(next)
// };
// exports.update = (req, res ,next) => {
//   bookRepos.update(req.data)
//       .then(() => {
//           res.status(200).json({message: 'Done!'})
//       })
//       .catch(next)
// };
