const logInUser = (userId = null, email = null, password = null) => {
    if (userId) {
        return (dispatch) => {
            dispatch({ type: 'LOG_IN_USER', userId: userId })
        }
    }
};

module.exports = logInUser;