# REST API Documentation
## Object Types
### User
```javascript
{
    username: string,
    email: string,
    password: string,
    sentForms: ObjectId[],
    receivedForms: ObjectId[],
    group: ObjectId[]
}
```
<details>
<summary>Details</summary><br>
For creation only username, email, and password are needed, everything else is optional.
</details>

### Group
```js
{
    name: string,
    users: ObjectId[],
    forms: ObjectId[]
}
```
<details>
<summary>Details</summary><br>
For creation only a name needs to be sent, everything else is optional.
</details>

### Form
```js
{
    name: string,
    description: string,
    fields: ObjectId[]
}
```
<details>
<summary>Details</summary><br>
For creation only a name needs to be sent, everything else is optional.
</details>

### Fields
```js
{
    label: string,
    type: ('text' | 'multiple' | 'single' | 'select' | 'date' | 'time' | 'date-range' | 'time-range' | 'number' | 'address'),
    value: string[],
    options: string[],
}
```
<details>
<summary>Details</summary><br>
For creation only label and type are needed, everything else is optional.
</details>

## Routes
### User Routes
#### `GET` /api/user/:id
* gets a user
* expects user id for :id
#### `POST` /api/user
* creates a new user
* expects username, email, password, and optional group in body
* returns user if creation successful
* will fail if duplicate username or email
#### `DELETE` /api/user/:id
* deletes a user
* expects user id for :id
* returns user if deletion successful
#### `POST` /api/user/login
* run a login attempt
* add username to the user session, allows to stay logged in and get current user
* expects user email and user password as 'email' and 'password' in body
* returns user if successful
#### `GET` /api/user/current?populated={1,0}
* returns the current user object if one is logged in
* returns null if no user is logged in
* populated the document if populated == 1
* doesn't populate if populated is 0 or blank

### Group Routes
#### `GET` /api/group/:id
* get a group
* expects group id for :id
#### `POST` /api/group
* creates a new group
* expects group object in body (see type above)
* returns group if creation successful
* will fail if duplicate name
#### `PATCH` /api/group/add/:group_id/:id
* adds user to group
* expects group id for :group_id
* expects user id for :id
#### `DELETE` /api/group/:id
* delete a group
* expects group id for :id
* returns group if deletion successful

### Form Routes
#### `GET` /api/form/:id
* get a form
* expects form id for :id
#### `POST` /api/form
* create a form
* expects form object in body (see type above)
* returns form if creation successful
#### `PATCH` /api/form/fields/:id
* update fields in a form
* expects form id for :id
* expects array of fields in body (see type above)
* returns form if update successful
#### `POST` /api/form/email/:id
* share a form by email
* expects form id for :id
* expects array of emails (strings) in body
* return updated form if sucessful
#### `DELETE` /api/form/:id
* delete a form
* expects form id for :id
* return form if deletion successful
#### `DELETE` /api/form/:id/field/:field_id
* remove a field from a form
* deletes the field from field collection
* expects form id for :id
* expects field id for :field_id
* return deleted field if deletion successful

### Field Routes
#### `GET` /api/field/:id
* get a field
* expects a field id for :id
#### `POST` /api/field/:id
* create a field and adds it to a form
* expects form id for :id
* expects field object in body (see type above)
returns field if creation successful

### Session Routes
#### `GET` /session/loggedin
* returns username of logged in user
* returns null if not logged in

#### `GET` /session/logout
* logs out current user if any exists
* redirects to root '/'