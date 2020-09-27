const signupUser = (userData) => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(result =>{
        console.log('result', result);
    })
    .catch(err => console.log('err', err));
};

module.exports = signupUser;