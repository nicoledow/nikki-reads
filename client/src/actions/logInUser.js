export default function logInUser(data) {

    localStorage.setItem('userId', data.userId);
    localStorage.setItem('token', data.token);

    return (dispatch) => dispatch({ type: 'LOG_IN_USER', payload: data.userId });
}