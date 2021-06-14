console.clear()
function readFile(object, callback) {
    let file = object.files[0]
    console.log(file)
    let reader = new FileReader()
    reader.onload = function() {
    callback(reader.result)
        console.log(reader)
    }
    reader.readAsText(file)
}
function saveFile(data, name){
    let a=document.createElement("a")
    a.setAttribute("download", name||"file.txt")
    a.setAttribute("href", "data:application/octet-stream;base64,"+btoa(data||"undefined"))
    a.click()
}
function read(){
    let file = document.getElementById("file").files[0]
    console.log("Loading \""+file.name+"\"... ("+Math.round(file.size/1024)+"kB)")
    if(file.size>=256*1024){
        if(!confirm("File size is "+Math.round(file.size/1024)+"kBytes! Really want to read it?")){
        console.log("Aborting loading file...")
        return
        }
    }
    let reader = new FileReader()
    reader.onload = function() {
        console.log("File readed!")
        document.getElementById("out").innerHTML=reader.result
    }
    console.log("Starting reading file...")
    reader.readAsText(file)
}


function replace_t1() {
    let source = document.getElementById("out");
    let txt = source.textContent || source.innerText;
    document.getElementById("out_t1").innerText = txt.replace(/\'/igm,'\"');
}
function replace_t2() {
    let source = document.getElementById("out");
    let txt = source.textContent || source.innerText;
    document.getElementById("out_t1").innerText = '';
    txt = txt.replace(/\'/igm,'\"');
    document.getElementById("out_t1").innerText = txt.replace(/\b\"\b/igm,'\'');
}