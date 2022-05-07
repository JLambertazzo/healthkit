// Create a form
export const createForm = (name, description, fields, username) => {
    const fieldsSorted = fields.sort((f1,f2) => f1.index - f2.index)
    const request = new Request(`/api/form`, {
        method: "post",
        body: JSON.stringify({form: {name, description, fields: fieldsSorted}, username}),
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

// Get form by form id
export const getForm = (id) => {
    const request = new Request(`/api/form/${id}?populated=1`, {
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

// Update fields in a form - takes form id and array of fields
export const updateFields = (username, id, fields) => {
    const request = new Request(`/api/form/fields/${id}`, {
        method: "PATCH",
        body: JSON.stringify({fields, username}),
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

export const updateForm = (form) => {
    const request = new Request(`/api/form/update`, {
        method: "post",
        body: JSON.stringify({ form }),
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

// Share a form by email -- takes form id and array of emails (strings)
export const shareByEmail = (id, username, emails, internal = false) => {

    const request = new Request(`/api/form/email/${id}${internal ? '?internal=1' : ''}`, {
        method: "post",
        body: JSON.stringify({username, emails}),
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

// Delete a form
export const deleteForm = (id) => {

    const request = new Request(`/api/form/${id}`, {
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

// Delete a field from a form -- takes form id and field id
export const removeField = (id, field_id) => {

    const request = new Request(`/api/form/${id}/field/${field_id}`, {
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

export const submitForm = (id, fields) => {
    const request = new Request(`/api/form/submit/${id}`, {
        method: "post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({fields})
    })
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
        })
        .catch(error => {
            console.log(error)
        })
}
