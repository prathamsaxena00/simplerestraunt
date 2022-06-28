function populate(s1,s2){

    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTML="";
    var op1=document.createElement("option");
        op1.innerHTML="--select one--";
        s2.options.add(op1);
    
    if (s1.value=="veg"){
        var fooditem=['Rajma chawal|200rs','Upma|50rs','Samosa|20rs'];
    }
    else if(s1.value=="nonveg"){
        var fooditem=['Butter Chicken|400rs','Seekh kabab|200rs','Egg curry|150rs'];
    }
    for (var food in fooditem){
        var pair =fooditem[food].split("|");
        

        var newoption=document.createElement("option");
        newoption.value=pair[0];
        newoption.name=pair[1];
        console.log(newoption.name)
        console.log(pair[0]);
        newoption.innerHTML=pair[0];
        s2.options.add(newoption);


    }
}
function changeimg(s3,i1,p){
    var pricelist=['Rajma chawal|200rs','Upma|50rs','Samosa|20rs','Butter Chicken|400rs','Seekh kabab|200rs','Egg curry|150rs'];
    var s3=document.getElementById(s3);
    var i1=document.getElementById(i1);
    var p=document.getElementById(p);
    console.log(s3.name);
    i1.src=s3.value+".jpg";
    for(var price in pricelist){
        var pair=pricelist[price].split("|");
        if(s3.value==pair[0]){
    p.innerHTML="this will cost you "+pair[1];
       
        }
    }

}