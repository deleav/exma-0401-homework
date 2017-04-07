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
                        <input type="text" v-model="todo.title" v-on:keyup.enter="toggleEditMode">
                    </span>
                    <span v-if="!editMode">
                            <h3 v-on:click="toggleEditMode" style="display: inline-block">{{todo.title}}</h3>
                            <input id="check" style="width: 20px; height: 20px" type="checkbox" v-model="todo.checked"> 
                            <label for="check"> {{todo.checked}} </label>
                            <button v-on:click="remove(index)">x</button>
                    </span>
                </span>
                `,
    methods: {
        toggleEditMode: function(){
            this.editMode =  !this.editMode ;
        }
    }
});

Vue.component('todo-component', TodoComponent);

const vm = new Vue({
   el: '#app', 
   data: {
       msg: 'yoyoyo' ,
       testVModelWithInput: 'yo mate' ,
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
       }
   }
});