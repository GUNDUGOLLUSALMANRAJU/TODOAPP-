* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: mediumslateblue;
    color: white;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
}

header {
    font-size: 1.5rem;
}

header, 
form {
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

form input, 
form button {
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 1.8rem;
    border: none;
    background: white;
    border-radius: 2rem;
}

form button {
    color: rgb(255, 200, 0);
    background: white;
    cursor: pointer;
    transition: all 0.3 ease;
    margin-left: 0.5rem;
}

form button:hover {
    color: white;
    background: rgb(255, 200, 0);
}

.fa-plus-circle {
    margin-top: 0.3rem;
    margin-left: -8px;
}

.todo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.todo-list {
    min-width: 30%;
    list-style: none;
}

.todo {
    margin: 0.5rem;
    padding-left: 0.5rem;
    background: white;
    color: black;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;
    border-radius: 2rem;
}

.todo li {
    flex: 1;
}

.trash-btn, 
.complete-btn {
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
}

.complete-btn {
    background: rgb(255, 200, 0);
}

.trash-btn {
    border-top-right-radius: 1.75rem;
    border-bottom-right-radius: 1.75rem;
    background: rgb(171, 171, 171);
}

.todo-item {
    padding: 0rem 0.5rem;
}

.fa-trash, 
.fa-check-circle {
    pointer-events: none;
}

.completed {
    text-decoration: line-through;
    opacity: 0.5;
}

.slide {
    transform: translateX(10rem);
    opacity: 0;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border: none;
}

.select {
    margin: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 50px;
}

select {
    color:rgb(255, 200, 0);
    width: 10rem;
    height: 3.2rem;
    cursor: pointer;
    padding: 1rem;
}

.select::after {
    content: "\25BC";
    position: absolute;
    background:rgb(255, 200, 0);
    top: 0;
    right: 0;
    padding: 1rem;
    pointer-events: none;
    transition: all 0.3s ease;
}

.select::hover::after {
    background: white;
    color: rgb(255, 200, 0);
}