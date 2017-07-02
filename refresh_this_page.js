(function (interval_min, url){
    // Constants
    var TOP_OFFSET = 100;
    // Due to cross origin policy some site will not allow iframing - so we will create an iframe inside the same page.
    var body_info = document.getElementByTagName("body").getBoundingClientRect();
    var body_width = body_info.widht,
        body_height = body_info.height;
    // Toggle Status
    var toggled_full = true;
    
    var frame_container = document.createElement("div");
    var button_container = document.createElement("div");
    var cross_toggle_button =  document.createEelement("button"); cross_toggle_button.appendChild(document.createTextNode("TogglE"));
    var frame = document.createElement("iframe");
    
    // Setup elements
    document.body.appendChild(frame_container);
    frame_container.appendChild(button_container);
    frame_container.appendChild(frame);
    button_container.appendChild(cross_toggle_button);
    
    // Toggle controller
    cross_toggle_button.onclick = function(){
        if (toggled_full === true){
            prepareFrameContainerFull();
        }else{
            prepareFrameContainerCollapsed();
        }
    };
    
    function prepareFrameContainerFull(){
        // set z index
        frame_container.style.width = "100%"; //body_width;
        frame_container.style.height = "100%"; //body_height;
        frame_container.style.opacity = 0.5;
        frame_container.style.margin = "20px";
        frame_container.style.padding = "15px";
        // position
        frame_container.style.position = "fixed";
        frame_container.style.top = "20px";
    }
    
    function prepareFrameContainerCollapsed(){
        frame_container.style.width = body_width;
        frame_container.style.height = body_height;
        frame_container.style.opacity = 0.5;
        frame_container.style.margin = "20px";
        frame_container.style.padding = "15px";
    }
    
    
    
    
    
    frame.setAttribute("src", url);
    
    
    setTimeout(function(){
        console.log("Reloading the page");
        location.reload();
        console.log("Reloaded?!");
    }, interval_min * 60 * 1000);
})(2 /* the interval of refeshing in minutes */,
  "https://www.fiverr.com/users/username/manage_gigs");