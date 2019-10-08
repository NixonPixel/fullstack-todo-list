class Auth {
    login(email, password) {
        const body = {
            email, password
        }
        return fetch(
            `/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(body)
        })
            .then(res => res)
            .then(res => res.json())
    }

    registration(email, password, userName) {
        const body = {email, password, userName}
        return fetch(
            `/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body)
        })
            .then(res => res)
            .then(res => res.json())
    }
}

export default Auth