(function (interval_min, url){
    // Constants
    var TOP_OFFSET = 100;
    // Due to cross origin policy some site will not allow iframing - so we will create an iframe inside the same page.
    var body_info = document.getElementByTagName("body").getBoundingClientRect();
    var body_width = body_info.widht,
        body_height = body_info.height;
    
    var frame_container = document.createElement("div");
    
    
    
    frame.setAttribute("src", url);
    
    
    setTimeout(function(){
        console.log("Reloading the page");
        location.reload();
        console.log("Reloaded?!");
    }, interval_min * 60 * 1000);
})(2 /* the interval of refeshing in minutes */,
  "https://www.fiverr.com/users/username/manage_gigs");