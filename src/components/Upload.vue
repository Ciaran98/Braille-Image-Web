<template>
<div>
    <form enctype="multipart/form-data">
        <input type="file" name="uploadImage" accept="image/*" @change="initImageData($event)"/>
        <button type="submit" @click="imageUpload($event)">Upload Image</button>
    </form>
</div>
<div >
    <p class="braille-output" v-if="buttonClicked">
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
            brailleThing:'',
            buttonClicked:false,
            imageData:''
        }
        
    },
    methods:{
    // Capture Image data from Image submission, and save it to imageData variable 
    initImageData(event){
        this.imageData = event.target.files[0];
    },
    // Upload Image to server, receive Image as Braille as a response from the server
    imageUpload(event){
        event.preventDefault();
        if(this.imageData.length == 0){
            alert('Please select an Image');
            return;
        }
        let data = new FormData();
        data.append('file',this.imageData);
        this.brailleThing = '';
        axios.post(url,data,{
            headers:{
                'Content-Type':'multipart/form-data',
            },
        })
        .then(res =>{
            this.buttonClicked = true;
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
.braille-output{
    border: 2px solid
}
p{
    font-size: 20px;
    max-width:80ch;
    text-align: center;
    padding: 20px 10px;
    border-radius: 6px;
}
</style>
