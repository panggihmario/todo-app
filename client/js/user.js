new Vue({
    el : "#user",
    data : {
        name :'',
        email :'',
        password : ''
    },
    methods : {
        register : function(){
            console.log("dafar")
               axios.post('http://localhost:3000/users/register',{
                name : this.name,
                email : this.email,
                password : this.password
            })
            .then(function(data){
                // console.log(data)
                localStorage.setItem('token',data.data.token)
                window.location ="http://localhost:8080"
                
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        login : function(){
            // console.log('login')
            axios.post('http://localhost:3000/users/login',{
                email : this.email,
                password : this.password
            })
            .then(function(data){
                console.log(data.data)
                if(data.data){
                    localStorage.setItem('token',data.data)
                    window.location ="http://localhost:8080/home.html"
                }
                
            })
        },
        logoutUser : function(){
            localStorage.clear()
            window.location = "http://localhost:8080"
        }
    }
})