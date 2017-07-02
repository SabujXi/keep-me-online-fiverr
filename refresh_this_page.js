(function (interval_min){
    
    setTimeout(function(){
        console.log("Reloading the page");
        location.reload();
        console.log("Reloaded?!");
    }, interval_min * 60 * 1000);
})(2 /* the interval of refeshing in minutes */);