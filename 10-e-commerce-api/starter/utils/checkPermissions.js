const CustomError = require("../errors");

const checkPermissions = (requestUser, ressourceUserId) => {
	// console.log(requestUser);
	// console.log(ressourceUserId);
	// console.log(typeof requestUser);
   if (requestUser.role === 'admin') return;
   if (requestUser.userId === ressourceUserId.toString()) return;
   throw new CustomError.unauthorizedError('Not authorized to access this route')
};

module.exports = checkPermissions;
