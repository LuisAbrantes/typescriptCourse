import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// type anotation to don't get messed up with the syntax calling the objects (1)
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id; // (1)
    const title = todo.title; // (1)
    const finished = todo.completed; // (1)

    logTodo(id, title, finished); // (2)
});

// type anotation to don't get messed up with the order on logTodo call (2)
const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`  
    The Todo with ID: ${id} 
    Has the title: ${title}
    Is it finished? ${finished}
    `);
}