const User = require('../../models/user')
const session = require('../../session/session')

const checkIfInWatchlist = async (id) => {
  let existingUser
  try {
    existingUser = await User.findOne({ email: session.email }).exec()
  } catch (err) {
    console.log(err)
  }

  if (!existingUser) return false

  const arr = existingUser.planToWatch
  for (let i=0; i<arr.length; i++) {
    if (arr[i].id === id) return true
  }

  return false
}

module.exports = checkIfInWatchlist