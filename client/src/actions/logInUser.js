export default function logInUser(data) {
    return (dispatch) => dispatch({ type: 'LOG_IN_USER', payload: data.userId });
}