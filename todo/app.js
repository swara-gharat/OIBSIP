document.addEventListener('DOMContentLoaded', function () {
  const todoForm = document.getElementById('todo-form');
  const pendingList = document.getElementById('pending-list');
  const completedList = document.getElementById('completed-list');

  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title !== '' && description !== '') {
      addTask(title, description);
      titleInput.value = '';
      descriptionInput.value = '';
    }
  });

  function addTask(title, description) {
    const taskItem = document.createElement('li');
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    taskItem.innerHTML = `
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <div>
        <span>${formattedDate}</span>
        <button class="complete-btn">Complete</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    const completeButton = taskItem.querySelector('.complete-btn');
    completeButton.addEventListener('click', function () {
      completeTask(taskItem);
    });

    const editButton = taskItem.querySelector('.edit-btn');
    editButton.addEventListener('click', function () {
      editTask(taskItem);
    });

    const deleteButton = taskItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function () {
      deleteTask(taskItem);
    });

    pendingList.appendChild(taskItem);
  }

  function completeTask(taskItem) {
    taskItem.classList.add('completed');
    const completeButton = taskItem.querySelector('.complete-btn');
    if (completeButton) {
      completeButton.remove();
    }

    const editButton = taskItem.querySelector('.edit-btn');
    if (editButton) {
      editButton.remove();
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    const lastChild = taskItem.querySelector('span:last-child');
    if (lastChild) {
      lastChild.innerText = `Completed on ${formattedDate}`;
    }

    completedList.appendChild(taskItem);
  }

  function editTask(taskItem) {
    const titleElement = taskItem.querySelector('h3');
    const descriptionElement = taskItem.querySelector('p');

    const currentTitle = titleElement.innerText;
    const currentDescription = descriptionElement.innerText;

    const newTitle = prompt('Edit task title:', currentTitle);
    const newDescription = prompt('Edit task description:', currentDescription);

    if (newTitle !== null && newDescription !== null) {
      titleElement.innerText = newTitle;
      descriptionElement.innerText = newDescription;
    }
  }

  function deleteTask(taskItem) {
    taskItem.remove();
  }
});
