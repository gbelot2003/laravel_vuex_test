export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then(response => {
                res(response.data)
            })
            .catch(er => {
                rej("Wrow email or password");
            })
    })
}

export function getLocalUser() {
    const userString = localStorage.getItem("user");

    if(!userString){
        return null;
    }

    return JSON.parse(userString);

}