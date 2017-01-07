function openPage(evt, pageName){
    var i, x, highLights, map;
    x = document.getElementsByClassName("Page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    highLights = document.getElementsByClassName("highLight");
    for (i = 0; i < highLights.length; i++) {
        highLights[i].className = highLights[i].className.replace("w3-gray", ""); 
        highLights[i].className = highLights[i].className.replace("w3-text-black", "");
    }
    map = document.getElementById("XMLID_183_");
    map.openPage(event, 'NTCN');
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " w3-gray";
  evt.currentTarget.className += " w3-text-black";
}
