// Creates a user -- the group should be an array
import app from "../App";

export const signup = (username, email, password, name, group) => {

    const request = new Request(`/api/user`, {
        method: "post",
        body: JSON.stringify({username, email, password, name, group}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export const LoginUser = (email, password, history) => {

    const request = new Request(`/api/user/login`, {
        method: "post",
        body: JSON.stringify({email, password}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                // history.push("/");
                window.location.href = "/home"
            }
            return res.json();
        })
        .catch(error => {
            console.log(error);
        });
}

// Gets a user from their user id
export const getUser = (id) => {
    const request = new Request(`/api/user/${id}`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json !== undefined) {
                return json;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

// Delete a user with the given user id
export const deleteUser = (id) => {

    const request = new Request(`/api/user/${id}`, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .catch(error => {
            console.log(error);
        });


}

// Return logged-in user or null if there is none
export const checkLoggedIn = (setCurrUser) => {
    const request = new Request(`/api/user/current?populated=1`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json !== undefined) {
                setCurrUser(json.user);
                return json.user
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export const logout = () => {
    const request = new Request(`/session/logout`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                window.location.href = "/"
                return res.json();
            }
        })
        .then(json => {
            if (json !== undefined) {
                return json;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 * Find all users in the given group
 * @param {string} group_id 
 * @returns Array of users
 */
export const getUsersByGroup = (group_id) => {
    const request = new Request(`/api/user/group/${group_id}`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json !== undefined) {
                return json.users;
            }
        })
        .catch(error => {
            console.log(error);
        });
}
