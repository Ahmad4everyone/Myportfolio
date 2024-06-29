function ans (){
    var x = document.getElementById("drpdownClick");
    if(x.className === "topnav"){
        x.className += " responsive"
        // **** change topnav to topnav.responsive ******  
    } else{
        x.className = "topnav";
    }
}