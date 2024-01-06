// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
        expenseamount: event.target.expenseamount.value,
        description: event.target.description.value,
        category: event.target.category.value,
    };

    const uniqueKey = new Date().getTime().toString();

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    userDetails.key = uniqueKey; 
    existingUsers.push(userDetails);

    localStorage.setItem('users', JSON.stringify(existingUsers));

    displayUserOnScreen(userDetails);

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
        removeFromLocalStorage(userDetails.key);
    });

    editBtn.addEventListener("click", function (event) {
        userList.removeChild(event.target.parentElement);
        removeFromLocalStorage(userDetails.key);
        document.getElementById("expenseamount").value = userDetails.expenseamount;
        document.getElementById("description").value = userDetails.description;
        document.getElementById("category").value = userDetails.category;
    });
}

function removeFromLocalStorage(key) {
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = existingUsers.filter(user => user.key !== key);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
}

function loadExistingUsers() {
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.forEach(displayUserOnScreen);
}

window.addEventListener('load', loadExistingUsers);

module.exports = handleFormSubmit;
