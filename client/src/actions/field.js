
// Create a field and add it to a form with given form id
export const createField = (id, label, type, value, options, index) => {

    const request = new Request(`/api/field/${id}`, {
        method: "post",
        body: JSON.stringify({label, type, value, options, index}),
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

// Get field by id
export const getField = (id) => {
    const request = new Request(`/api/field/${id}`, {
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
