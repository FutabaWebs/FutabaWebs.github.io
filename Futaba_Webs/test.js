function test()
{
    
    //First we're going to grab the element of the html body on the page and check the value for it
    var search = document.getElementById("search").innerHTML; //This will secure the value for it

    alert(search);
    //Next we're going to place the elements inside the paragraph 
    document.getElementById("tp").innerHTML = search;


}