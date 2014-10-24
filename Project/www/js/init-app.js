window.app = window.app || {} ;       

app.initEvents = function() {
    "use strict" ;
    var fName = "app.initEvents():" ;
    console.log(fName, "entry") ;
    $(".take").bind("click", takePic);
    document.addEventListener("intel.xdk.camera.picture.add",onSuccess); 
} ;
document.addEventListener("app.Ready", app.initEvents, false) ;



