
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        expenseamount: event.target.expenseamount.value,
        description: event.target.description.value,
        category: event.target.category.value,
    };

    axios.post('https://crudcrud.com/api/dd517b9f346d4b2c9ece7853053cca57/appointment', userDetails)
        .then((response) => {
            console.log("Success! Expense added.");
            displayUserOnScreen(response.data);
        })
        .catch((err) => {
            console.log(err);
        });

    document.getElementById("expenseamount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
}

function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");

    userItem.appendChild(
        document.createTextNode(
            ` ${userDetails.expenseamount} - ${userDetails.description} - ${userDetails.category}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    deleteBtn.addEventListener("click", function (event) {
        const userId = userDetails._id; // Assuming '_id' is the identifier from CRUD CRUD
        deleteExpense(userId, userItem);
    });

    editBtn.addEventListener("click", function (event) {
        userList.removeChild(event.target.parentElement);
        const userId = userDetails._id; // Assuming '_id' is the identifier from CRUD CRUD
        updateExpense(userId);
    });


}

function loadExistingUsers() {
    axios.get('https://crudcrud.com/api/dd517b9f346d4b2c9ece7853053cca57/appointment')
        .then((response) => {
            const existingUsers = response.data;
            existingUsers.forEach(displayUserOnScreen);
        })
        .catch((err) => {
            console.error(err);
        });
}
function deleteExpense(userId, userItem) {
    axios.delete(`https://crudcrud.com/api/dd517b9f346d4b2c9ece7853053cca57/appointment/${userId}`)
        .then(() => {
            console.log("Success! Expense deleted.");
            userItem.remove(); 
        })
        .catch((err) => {
            console.error(err);
        });
}



function updateExpense(userId) {
    axios.get(`https://crudcrud.com/api/dd517b9f346d4b2c9ece7853053cca57/appointment/${userId}`)
        .then((response) => {
            const existingUsers = response.data;
            document.getElementById("expenseamount").value = existingUsers.expenseamount;
            document.getElementById("description").value = existingUsers.description;
            document.getElementById("category").value = existingUsers.category;
            console.log("Success! Expense updated.");
            // Implement logic to update the UI with the edited details
        })
        .catch((err) => {
            console.error(err);
        });
}

window.addEventListener('load', loadExistingUsers);

module.exports = handleFormSubmit;
