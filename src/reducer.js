
const ADD_LIST = 'ADD-LIST';
const addListAC = (listTitle) => ({type: ADD_LIST, listTitle: listTitle})

const DELETE_LIST = 'DELETE-LIST';
const deleteListAC = (listId) => ({type: DELETE_LIST, listId})

const ADD_TASK = 'ADD-TASK';
const addTaskAC = (taskTitle, listId) => ({type: ADD_TASK, listId, taskTitle})

const DELETE_TASK = 'DELETE-TASK';
const deleteTaskAC = (listId, taskId) => ({type: DELETE_TASK, listId, taskId})

const UPDATE_TASK = 'UPDATE-TASK';
const updateTaskAC = (listId, taskId, dataObj) => ({type: UPDATE_TASK, listId, taskId, dataObj})


const initialState = localStorage.getItem('TodoListForGit') !== null
    ? JSON.parse(localStorage.getItem('TodoListForGit'))
    : {
        lists: []
        //lists: [{id: 0, title: 'Спорт', nextTaskId: 2, tasks: [{ id: 1, title: 'CSS', isDone: false, priority: 'medium' }]  }]
    };


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_LIST:
            const listId = state.lists.length;
            const newList = { id: listId, title: action.listTitle, tasks: [], nextTaskId: 1 };
            return {
                ...state,
                lists: [...state.lists, newList],
            }

        case DELETE_LIST:
            return {
                ...state,
                lists: 
                    state.lists.filter((list) => list.id !== action.listId)
                    .map( (list, index) => ({ ...list, id: index }) )
            }

        case ADD_TASK:
            const taskId = state.lists[action.listId].tasks.length + 1;
            const newTask = { id: taskId, title: action.taskTitle, isDone: false, priority: 'medium' }
            return {
                ...state,
                lists: state.lists.map((list) => {
                    if (list.id === action.listId) {
                        return {
                            ...list,
                            nextTaskId: list.nextTaskId + 1,
                            tasks: [...list.tasks, newTask]
                        }
                    } else return list;

                })
            }

        case DELETE_TASK:
            return {
                ...state,
                lists: state.lists.map((list) => {
                    if (list.id === action.listId) {
                        return {
                            ...list,
                            tasks:
                                list.tasks.filter((task) => task.id !== action.taskId)
                                    .map((task, index) => ({ ...task, id: index + 1 }))
                            // получаю список заданий с номерами по порядку
                        }
                    } else return list
                })
            }

        case UPDATE_TASK:

            const getNewPriorityObj = () => {
                switch (action.dataObj.priority) {
                    case 'high':
                        return ({ priority: 'low' })
                    case 'low':
                        return ({ priority: 'medium' })
                    default:
                        return ({ priority: 'high' })
                }
            }

            const newData = action.dataObj['priority'] === undefined ? action.dataObj : getNewPriorityObj();

            return {
                ...state,
                lists: state.lists.map((list) => {
                    if (list.id === action.listId) {
                        return {
                            ...list,
                            tasks: list.tasks.map((task) => {
                                if (task.id === action.taskId) {
                                    return { ...task, ...newData }
                                } else return task
                            })
                        }
                    } else return list;
                })
            }

        default: return state;
    }

}

export default reducer;
export { addListAC, deleteListAC, addTaskAC, deleteTaskAC, updateTaskAC };