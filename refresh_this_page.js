(function (interval_min, url){
    // Constants
    var TOP_OFFSET = 100;
    // Due to cross origin policy some site will not allow iframing - so we will create an iframe inside the same page.
    var body_info = {width: screen.width, height: screen.height }; // document.body.getBoundingClientRect();//document.getElementsByTagName("body")[0].getBoundingClientRect();
    var body_width = body_info.width,
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
    
    function containerStateToggler(){
        if (toggled_full === true){
            prepareFrameContainerCollapsed();
            toggled_full = false;
            console.log("Collapsed");
        }else{
            prepareFrameContainerFull();
            toggled_full = true;
            console.log("Full-ed");
        }
    }
    // Toggle controller
    cross_toggle_button.onclick = containerStateToggler;
    
    // preparing the frame container
        // set z index
        frame_container.style.zIndex = 999999;
        // position
        frame_container.style.position = "fixed";
    
        frame_container.style.opacity = 0.8;
        frame_container.style.margin = "20px";
        frame_container.style.padding = "15px";
        frame_container.style.overflowX = "scroll";
        frame_container.style.overflowY = "scroll";
        frame_container.style.border = "2px dotted red";
    // prepare frame
        frame.style.width = "100%";
        frame.style.height = "100%";
    
    function prepareFrameContainerFull(){
        // position
        frame_container.style.bottom = "";
        frame_container.style.top = "20px";
        frame.style.display = "block";
        
        frame_container.style.width = body_width + "px";
        frame_container.style.height = body_height + "px";
    }
    
    function prepareFrameContainerCollapsed(){
        frame_container.style.top = "";
        frame_container.style.bottom = "20px";
        frame.style.display = "none";
        
        frame_container.style.width = "200px";
        frame_container.style.height = "100px";
    }
    
    function init(){
        frame.setAttribute("src", url);
        prepareFrameContainerFull();
        
        
        // refresh
        setInterval(function(){
            console.log("Reloading the page");
            // location.reload();
            frame.setAttribute("src", "");
            frame.setAttribute("src", url);
            console.log("Reloaded?!");
        }, interval_min * 60 * 1000);
    }
    
    init();
    
})(2 /* the interval of refeshing in minutes */,
  "https://www.fiverr.com/users/username/manage_gigs");