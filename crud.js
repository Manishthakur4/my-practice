
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        expenseamount: event.target.expenseamount.value,
        description: event.target.description.value,
        category: event.target.category.value,
    };

    axios.post('https://crudcrud.com/api/43d123b3089948fb834aad7aeec1a140/appointment', userDetails)
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
        userList.removeChild(event.target.parentElement);
    });

    editBtn.addEventListener("click", function (event) {
        userList.removeChild(event.target.parentElement);
    });
}

function loadExistingUsers() {
    axios.get('https://crudcrud.com/api/43d123b3089948fb834aad7aeec1a140/appointment')
        .then((response) => {
            const existingUsers = response.data;
            existingUsers.forEach(displayUserOnScreen);
        })
        .catch((err) => {
            console.error(err);
        });
}

window.addEventListener('load', loadExistingUsers);

module.exports = handleFormSubmit;
