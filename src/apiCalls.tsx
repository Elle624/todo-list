export const apiCalls = {
  getTodoList() {
    return fetch('https://todo-list-yl.herokuapp.com/todo-list').then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            'Sorry we are having difficulty loading this page, please try again later!'
          );
        }
      }
    );
  },
};
