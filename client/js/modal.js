Vue.component('edit-modal', {
    data: function () {
      return {
        count: 0,
        dataTask : {}
       
      }
    },
    template: `<div class="modal fade" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Edit Task</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
            
                    <input type="text"   class="form-control"  v-model="dataTask.task" aria-describedby="emailHelp" >
                    <br><br>
                    <input type="date" class="form-control-sm" v-model="dataTask.duedate">
            </div>
  
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger"   data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" v-on:click="dataEdit(edits)">Edit</button>
            </div>
          
        </div>
    </div>
</div>`,
props : ['edits'],
methods : {
    dataEdit : function(data){
        console.log(data)
        axios.put(`http://localhost:3000/edit/${data._id}`,
        this.dataTask)
        .then((data)=>{
            // console.log('edit')
            window.location ="http://localhost:8080/home.html"
            
        })
    }
},
watch : {
    edits() {
        this.dataTask = this.edits
    }
}

  })