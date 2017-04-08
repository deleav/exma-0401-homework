const TodoComponent = Vue.extend({
    data: function(){
        return {
            editMode: false
        } ;
    },
    props: ['todo', 'remove' , 'index'],
    template: `
                <span style="display: inline-block">
                    <span v-if="editMode">
                        <textarea autofocus v-on:blur="toggleEditMode" v-model="todo.title"></textarea>
                        <button v-on:click="toggleEditMode"> ok </button>
                    </span>
                    <span v-if="!editMode">
                            <textarea readonly v-on:click="toggleEditMode" v-model="todo.title"></textarea>
                            <input id="check" style="width: 20px; height: 20px" type="checkbox" v-model="todo.checked"> 
                            <label for="check"> {{todo.checked}} </label>
                            <button v-on:click="remove(index)">x</button>
                    </span>
                </span>
                `,
    methods: {
        toggleEditMode: function(){
            console.log(this.todo.title);    
            this.editMode =  !this.editMode ;
        }
    }
});

Vue.component('todo-component', TodoComponent);

const vm = new Vue({
   el: '#app', 
   data: {
       todoText:'',
       todos: [
           { title: 'Todo 1', checked: true },
           { title: 'Todo 2', checked: false },
           { title: 'Todo 3', checked: false },
           { title: 'Todo 4', checked: true },
           { title: 'Todo 5', checked: true }
       ]
   },
   methods: {
       addTodo: function(){
            console.log(this.todoText);
            const todoText = this.todoText.trim();
            if(todoText){
                this.todos.push( { title: todoText, checked: false } );    
                this.todoText='';
            }
       },
       remove: function(id){
           this.todos.splice(id, 1);
       },
       filterForChecked: function(){
           return this.todos.filter(function(todo){
                return todo.checked;
           }).length ;
       },
       toggle: function(isComplted){
           this.todos.forEach(function(todo){
               if(todo.checked!==isComplted){
                    todo.checked=!todo.checked;
               }
           });
       }
   }
});