const express = require('express');
const fileupload = require('express-fileupload');
const app = express();
const port = 3000;
const buffer = require('node:buffer');
const fs = require('fs');
const Jimp  = require('jimp');
var bodyParser = require('body-parser');
const HEADER_OFFSET = 54;
const WIDTH = 160;
const HEIGHT = 160;
let rows = 0;
let data_to_send ='';
let bmpbuff;
app.use(fileupload());
app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({extended:true}));
const cors = require('cors');
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/',(req,res)=>{
    data_to_send = '';
    let data = req.files.file.data;
    Jimp.read(data).then(image =>{
        image
        .resize(WIDTH,HEIGHT)
        .background(0xf1f1f1)
        .getBuffer(Jimp.MIME_BMP,(err,buffer)=>{
            if(err) throw err;
            for(let i = HEADER_OFFSET; i< buffer.length; i+=6){
                data_to_send+=String.fromCharCode(PixelsToBinary(buffer,i,WIDTH));
                rows++;
                if(rows % (WIDTH/2) == 0){
                    data_to_send+='\n';
                    i+=((WIDTH*3)*3);
                }
            }
            res.json(data_to_send);
        })
    }).catch(err =>{
        console.error(err);
    });
    
})
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

function PixelsToBinary(Data, i, Width){
    let binary = 10240;
    if(addColorVals(Data[i],Data[i+1],Data[i+2]) < 128) binary+=1;
    if(addColorVals(Data[i+3],Data[i+4],Data[i+5]) < 128) binary+=8;
    if(addColorVals(Data[i+(Width*3)],Data[i+(Width*3)+1],Data[i+(Width*3)+2]) < 128) binary+=2;
    if(addColorVals(Data[i+(Width*3)+3],Data[i+(Width*3)+4],Data[i+(Width*3)+5]) < 128) binary+= 16;
    if(addColorVals(Data[i+(Width*6)],Data[i+(Width*6)+1],Data[i+(Width*6)+2]) < 128) binary+= 4;
    if(addColorVals(Data[i+(Width*6)+3],Data[i+(Width*6)+4],Data[i+(Width*6)+5]) < 128) binary+= 32;
    if(addColorVals(Data[i+(Width*9)],Data[i+(Width*9)+1],Data[i+(Width*9)+2]) < 128) binary+= 64;
    if(addColorVals(Data[i+(Width*9)+3],Data[i+(Width*9)+4],Data[i+(Width*9)+5]) < 128) binary+= 128;
    return binary;
}
function addColorVals(b,g,r){
    return Math.round((b+g+r)/3);
}