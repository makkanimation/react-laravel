import decode from 'jwt-decode';

export function getToken() {
	return localStorage.getItem('token')
}

export function  setToken(token) {
    localStorage.setItem('token', token)
}

export function loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = getToken() // GEtting token from localstorage
    return !!token && !isTokenExpired(token);
}

export function removeToken(){
    localStorage.removeItem('token');
}

export function isTokenExpired(token) {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
            return true;
        }
        else
            return false;
    }
    catch (err) {
        return false;
    }
}
