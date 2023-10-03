async function createUser() {
    try {
        let id = document.getElementById('newID').value;
        let name = document.getElementById('newName').value;
        let age = document.getElementById('newAge').value;
        let city = document.getElementById('newCity').value;
        let request = await fetch('/createUser/' + id + '/' + name + '/' + age + '/' + city);
        let result = await request.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function readUser() {
    try {
        let id = document.getElementById('typedID').value;
        let request = await fetch('/readUser/' + id);
        let result = await request.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function updateUser() {
    try {
        let id = document.getElementById('newID').value;
        let name = document.getElementById('newName').value;
        let age = document.getElementById('newAge').value;
        let city = document.getElementById('newCity').value;
        let request = await fetch('/updateUser/' + id + '/' + name + '/' + age + '/' + city);
        let result = await request.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser() {
    try {
        let id = document.getElementById('typedID').value;
        let request = await fetch('/deleteUser/' + id);
        let result = await request.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function printAllUsers() {
    try {
        let request = await fetch('/printAllUsers');
        let result = await request.json();
        if (Object.keys(result).length === 0) {
            console.log("there are no users in the system.");
        } else {
            for (const key in result) {
                const user = result[key];
                console.log(user);
            }
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}
