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

  addTodoList(data: { id: string; text: string; complete: boolean }) {
    return fetch('https://todo-list-yl.herokuapp.com/todo-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          'Sorry we are having difficulty processing this request, please try again later!'
        );
      }
    });
  },

  removeTodoList(id: string) {
    return fetch('https://todo-list-yl.herokuapp.com/todo-list', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          'Sorry we are having difficulty processing this request, please try again later!'
        );
      }
    });
  },
};
