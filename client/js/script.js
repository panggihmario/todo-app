new Vue({
    el : "#app",
    data : {
        tasks :[],
        todo:'',
        name : '',
        email : '',
        password : ''
    },
    methods :{
        allTask : function(){
           
            
            axios.get('http://localhost:3000/alltask')
            .then((data)=>{
                // console.log(data)
                this.tasks= data.data
            })
        },
        addNewTask : function(){
            var token=localStorage.getItem('token')
           
                axios.post('http://localhost:3000/task',{
                    task : this.todo
                },{
                    headers : {
                        authorization : token
                    }
                })
                .then((data)=>{
                    console.log(data)
                })
         
         
        },
        deleteTask : function(req,res){
            axios.get('http://localhost:3000/delete/:id',{
                _id : req.params.id
            })
            .then((del)=>{
                console.log('delete')
            })
        }
    },
    created(){
        this.allTask()
    }
})