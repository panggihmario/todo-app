new Vue({
    el : "#app",
    data : {
        tasks :[],
        todo:'',
        name : '',
        email : '',
        password : '',
        edit: null,
        duedate : '',
        username : ''
    },
    methods :{
        allTask : function(){
           
            var token=localStorage.getItem('token')
            axios.get('http://localhost:3000/alltask',{
                headers : {
                    token : token
                }
            })
            .then((data)=>{
                // console.log(data.data[0].user.name)
                this.username = data.data[0].user.name
                this.tasks= data.data
            })
        },
        addNewTask : function(){
            var token=localStorage.getItem('token')
           
                axios.post('http://localhost:3000/task',{
                    task : this.todo,
                    duedate : this.duedate
                },{
                    headers : {
                        token : token
                    }
                })
                .then((data)=>{
                    console.log(data)
                    this.allTask()
                    this.todo=''
                })
         
         
        },
        deleteTask : function(id){
            console.log(id)
            axios.delete(`http://localhost:3000/delete/${id}`,{
                _id : id
            })
            .then((del)=>{
                console.log('delete')
                this.allTask()
            })
        },
        getData : function(data){
            this.edit = data
        },
        editTask : function(id){
            axios.put(`http://localhost:3000/edit/${id}`,{
                _id :  id
            },{
                task : this.dataTask
            })
            .then((data)=>{
                console.log('edit')
                this.allTask()
            })
        },
        logout : function(){
            window.location = "http://localhost:8080/"
                // statusChangeCallback(response);
                    localStorage.clear()
            FB.logout(function(response) {
                // user is now logged out
                    // if(!response){
              
                    // }
                    window.location = "http://localhost:8080/"
                // statusChangeCallback(response);
                    localStorage.clear()
              });
        }
    },
    created(){
        this.allTask()
    }
})