const express = require("express");
const serveStatic = require("serve-static");
const fileupload = require("express-fileupload");
const app = express();
const path = require("path");
const buffer = require("node:buffer");
const fs = require("fs");
const Jimp = require("jimp");
const cors = require("cors");
let bodyParser = require("body-parser");
const HEADER_OFFSET = 54;
let WIDTH = 80;
let HEIGHT = 80;
let rows = 0;
let data_to_send = "";
let bmpbuff;

app.use(fileupload());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.post("/", (req, res) => {
  data_to_send = "";
  let data = req.files.file.data;
  Jimp.read(data)
    .then((image) => {
      image
        .resize(WIDTH, HEIGHT)
        .background(0xf1f1f1)
        .getBuffer(Jimp.MIME_BMP, (err, imgBuffer) => {
          if (err) throw err;
          for (let i = HEADER_OFFSET; i < imgBuffer.length; i += 6) {
            data_to_send += String.fromCharCode(
              PixelsToBinary(imgBuffer, i, WIDTH)
            );
            rows++;
            if (rows % (WIDTH / 2) == 0) {
              data_to_send += "\r\n";
              i += WIDTH * 3 * 3;
            }
          }
          res.json(data_to_send);
        });
    })
    .catch((err) => {
      console.error(err);
    });
});

const port = process.env.PORT || 8080;
app.listen(port);

function PixelsToBinary(Data, i, Width) {
  let binary = 10241;
  if (addColorVals(Data[i + 3], Data[i + 4], Data[i + 5]) < 128) binary += 8;
  if (
    addColorVals(
      Data[i + Width * 3],
      Data[i + Width * 3 + 1],
      Data[i + Width * 3 + 2]
    ) < 128
  )
    binary += 2;
  if (
    addColorVals(
      Data[i + Width * 3 + 3],
      Data[i + Width * 3 + 4],
      Data[i + Width * 3 + 5]
    ) < 128
  )
    binary += 16;
  if (
    addColorVals(
      Data[i + Width * 6],
      Data[i + Width * 6 + 1],
      Data[i + Width * 6 + 2]
    ) < 128
  )
    binary += 4;
  if (
    addColorVals(
      Data[i + Width * 6 + 3],
      Data[i + Width * 6 + 4],
      Data[i + Width * 6 + 5]
    ) < 128
  )
    binary += 32;
  if (
    addColorVals(
      Data[i + Width * 9],
      Data[i + Width * 9 + 1],
      Data[i + Width * 9 + 2]
    ) < 128
  )
    binary += 64;
  if (
    addColorVals(
      Data[i + Width * 9 + 3],
      Data[i + Width * 9 + 4],
      Data[i + Width * 9 + 5]
    ) < 128
  )
    binary += 128;
  return binary;
}
function addColorVals(b, g, r) {
  return Math.round((b + g + r) / 3);
}
