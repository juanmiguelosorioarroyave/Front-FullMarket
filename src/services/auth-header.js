export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.acceswToken) {
        return { 'x-acces-token': user.accessToken };
    } else{
        return {};
    }
}
