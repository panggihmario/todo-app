Vue.component('list-todo', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<table class="table table-hover">
                    <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Due Date</th>
                        <th>Edit</th>
                        <th>Action</th> 
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in tasks">
                      <td>{{task.task}}</td>
                      <td>{{task.duedate}}</td>
                      <td>
                          <i class="far fa-edit" data-toggle="modal" @click="editTask(task)" data-target="#myModal"></i>
                      </td>
                      <td>
                          <a href="#" v-on:click="deleteTask(task._id)">
                              <i class="fas fa-trash"></i>
                              </a>
                          </td>
                    </tr>
                     </tbody>
                </table>`,
  props : ['tasks'],
  methods : {
      editTask : function(data){
          console.log(data)
          this.$emit('data-task',data)
      },
      deleteTask : function(id){
        //   console.log(data)
        console.log(id)
        axios.delete(`http://localhost:3000/delete/${id}`,{
            _id : id
        })
        .then((del)=>{
            console.log('delete')
            // this.allTask()
            window.location ="http://localhost:8080/home.html"
        })
      },
      allTask : function(){
           
        var token=localStorage.getItem('token')
        axios.get('http://localhost:3000/alltask',{
            headers : {
                token : token
            }
        })
        .then((data)=>{
            // console.log(data)
            this.tasks= data.data
        })
    }
      
  }
  })