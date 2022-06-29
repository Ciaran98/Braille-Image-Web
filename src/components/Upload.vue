<template>
<div>
    <form enctype="multipart/form-data">
        <input type="file" name="uploadImage" accept="image/*" @change="imageUpload($event);"/>
    </form>
</div>
<div>
    <p>
    {{brailleThing}}
    </p>

</div>

</template>

<script>

import axios from 'axios';
const url = 'http://localhost:3000/';
const FormData = require('form-data');

export default {
    name: "upload-component",
    data(){
        return{
            brailleThing:''
        }
        
    },
    methods:{

    imageUpload(event){
        if(!event.target.files[0]){
            return;
        }
        this.brailleThing = '';
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
        let data = new FormData();
        data.append('name','image-upload');
        data.append('file',event.target.files[0]);
        axios.post(url,data,{
            headers:{
                'Content-Type':'multipart/form-data',
            },
        })
        .then(res =>{
            this.brailleThing = res.data;
        }).catch(err =>{
            console.error(err);
        })
    }
}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    font-size: 20px;
}
</style>
