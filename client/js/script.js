new Vue({
    el : "#app",
    data : {
        tasks :[],
        todo:''
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
            axios.post('http://localhost:3000/task',{
                task : this.todo
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