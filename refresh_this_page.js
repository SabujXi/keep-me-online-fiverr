(function (interval_min, url){
    // Constants
    var TOP_OFFSET = 100;
    // Due to cross origin policy some site will not allow iframing - so we will create an iframe inside the same page.
    var body_info = document.body.getBoundingClientRect();//document.getElementsByTagName("body")[0].getBoundingClientRect();
    var body_width = body_info.widht,
        body_height = body_info.height;
    console.log(body_info);
    // Toggle Status
    var toggled_full = true;
    
    var frame_container = document.createElement("div");
    var button_container = document.createElement("div");
    var cross_toggle_button =  document.createElement("button"); cross_toggle_button.appendChild(document.createTextNode("TogglE"));
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
    
    // preparing the frame container
        // set z index
        frame_container.style.zIndex = 500;
        // position
        frame_container.style.position = "fixed";
        frame_container.style.width = "100%"; //body_width;
        frame_container.style.minWidth = "500px";
        frame_container.style.height = "100%"; //body_height;
        frame_container.style.minHeight = "500px";
        frame_container.style.opacity = 0.5;
        frame_container.style.margin = "20px";
        frame_container.style.padding = "15px";
    
    function prepareFrameContainerFull(){
        // position
        frame_container.style.bottom = "";
        frame_container.style.top = "20px";
        frame.display = "block";
    }
    
    function prepareFrameContainerCollapsed(){
        frame_container.style.top = "";
        frame_container.style.bottom = "20px";
        frame.display = "none";
    }
    
    function init(){
        frame.setAttribute("src", url);
        prepareFrameContainerFull();
        
    }    
    
    // refresh
    setInterval(function(){
        console.log("Reloading the page");
        // location.reload();
        frame.setAttribute("src", "");
        frame.setAttribute("src", url);
        console.log("Reloaded?!");
    }, interval_min * 60 * 1000);
})(2 /* the interval of refeshing in minutes */,
  "https://www.fiverr.com/users/username/manage_gigs");