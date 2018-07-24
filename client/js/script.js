new Vue({
    el : "#app",
    data : {
        tasks :[],
        todo:'',
        name : '',
        email : '',
        password : '',
        edit: null
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
                console.log(data)
                this.tasks= data.data
            })
        },
        addNewTask : function(){
            var token=localStorage.getItem('token')
           
                axios.post('http://localhost:3000/task',{
                    task : this.todo
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
        }
    },
    created(){
        this.allTask()
    }
})