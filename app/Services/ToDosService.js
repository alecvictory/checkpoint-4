import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { toDoApi } from "./AxiosService.js";

class ToDosService {
    async getToDos() {
        let response = await toDoApi.get('')
        // ProxyState.toDo = new ToDo(response.data)
        ProxyState.todos = response.data.map(rawData => new ToDo(rawData));
        console.log(ProxyState.todos);
    }

    async addToDo(newToDo) {
        await toDoApi.post("", newToDo)
        ProxyState.todos = [...ProxyState.todos, new ToDo(newToDo)]
    }

    // async removeToDo(id) {
    //     await toDoApi.delete(id)
    //     ProxyState.todos = ProxyState.todos.filter(t => t.id !== id)
    // }


}
export const toDosService = new ToDosService();