function replacer(pic) {
    $("img").replaceWith(pic);
}

function takePic() {
    intel.xdk.camera.takePicture(50,false,"jpg");
}

function onSuccess(evt) {
    if (evt.success == true) {
        var image = document.createElement('img');
        image.src=intel.xdk.camera.getPictureURL(evt.filename);
        image.setAttribute ("style","width:100%;height:200px;");
        image.id=evt.filename;
        replacer(image);
    }
    else {
        if (evt.message != undefined) {
            alert(evt.message);
    }
    else
    {
        alert("error capturing picture");
    }
  }
}





