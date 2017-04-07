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
            // todos.push({ 
            //     id: todos.length-1,
            //     title: title, 
            //     checked: false
            // });
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