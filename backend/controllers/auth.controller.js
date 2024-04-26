export const login = (req, res) => {
    res.send('Login Route');
    console.log('Login user');
}

export const logout = (req, res) => {
    res.send('Logout Route');
    console.log('Logout user');
}

export const signup = (req, res) => {
    res.send('Sign Up Route');
    console.log('Sign up user');
}