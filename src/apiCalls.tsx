const updateData = (path: string, action: string, id: string) => {
  return fetch(path, {
    method: action,
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
};

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
    return updateData(
      'https://todo-list-yl.herokuapp.com/todo-list',
      'DELETE',
      id
    );
  },

  updateCompleteStatus(id: string) {
    return updateData(
      `https://todo-list-yl.herokuapp.com/todo-list/${id}`,
      'PATCH',
      id
    );
  },
};
