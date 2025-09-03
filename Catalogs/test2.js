function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


//Loads the catalog list
function ModalLoad()
{    
    document.getElementById("testq").innerHTML = '<h2>Futaba_Webs 🕸🕸🎃🕸🕸</h2> <p> Run the "Help" Command</p> <p> "Shift-Alt-P" (Opens Search Mode)</p> </br> <ul id="myUL" style = "list-style-type: none;"> <li><a href="https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Is TCM Security Still Credible? <img src="futaba 6.jpg" class="img-responsive" alt="portfolio img"></a></li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Build Your Personal Brand? <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025"style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Womens History Month 2025 <img src="kiki.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Why Futaba Does Cyber Security!? <img src="BatManWL.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Resource? OR Opportunities? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br>   <li><a href="https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Ex Machina Parlor <img src="ExMachinaParlor.jpeg" class="img-responsive" alt="portfolio img"></a> </li></br> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware <img src="confluence.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware (Part 2) <img src="rclone.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Futabas Cyber Security Content <img src="FutabasCyberSecurityContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted" style = "text-decoration: none; color: #D43F52; font-weight: bold;"> 🎃 Should 3rd Party Vendors Be Trusted? <img src="Should3rdPartyVendorsBeTrusted.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ArticleCatalog#portfolio" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Catalog Page <img src="Welcome Tier.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Goal Of Futaba_Webs <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img"></a> </li></br> </ul>';
}

//Closes the catalog list
function ModalUnload()
{    
    document.getElementById("testq").innerHTML = '';
}

//This is going to set an effect for if the modal opens
$('#flipFlop').on('show.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    ModalLoad();
})

//This is going to set an effect for if the modal closes
$('#flipFlop').on('hide.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    ModalUnload();
})


//This sets up the Search Mode command features
document.getElementById('search').addEventListener('input', function(event) {
       
        var command = event.target.value; //
        
        var testinput = document.getElementById('testp').innerHTML = command; //This is going to set the current value to 
      

        switch(command)
        {

            case "tcm":

            document.getElementById("testq").innerHTML = '🎃 Is TCM Still Credible?';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible"> <img src="futaba 6.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Is TCM Security Still Credible? 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> </div>'; 

            
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })
            



            case "tcm -revoke":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#revoke";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })
        
              
            


            case "tcm -stance": 

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";

                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#stance";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })



            case "tcm -suspicions": 

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#suspicions";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })




            case "tcm -lying":
                
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#lying";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })





            case "tcm -revised": 

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#truth";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "tcm truth":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#truth";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key == "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })




            case "tcm reliable":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#reliable";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })






            case "tcm afterthoughts":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible#AfterThoughts";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })




            case "tcm -options":

            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: tcm -revoke) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -revoke</p> <p>🎃 -stance</p> <p>🎃 -suspicions</p> <p>🎃 -lying</p> <p>🎃 -revised</p> <p>🎃 -truth</p> <p>🎃 -reliable</p> <p>🎃 -afterthoughts</p> <p></p>';



            case "brandp":

            document.getElementById("testq").innerHTML = '🎃 How To Build Your Personal Brand?';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand"> <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">How to Build Your Personal Brand? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>'; 
                
                document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })
  


            case "brandp":

            document.getElementById("testq").innerHTML = '🎃 How To Build Your Personal Brand?';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand"> <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">How to Build Your Personal Brand? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>'; 
                
                document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })
  


            case "brandp -options":

            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: brandp -endgoal) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -endgoal</p> <p>🎃 -authentic</p> <p>🎃 -gettingseen</p> <p>🎃 -community</p> <p>🎃 -capitalize</p> <p></p>';


            case "brandp -endgoal":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand#endgoal";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "brandp -authentic":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand#authentic";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "brandp -gettingseen":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand#gettingseen";    

                //We're going to change the value of the field again 

            })
            
            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "brandp -community":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand#community";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "brandp -capitalize":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand#capitalize";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm":

            document.getElementById("testq").innerHTML = '🎃 Women’s History Month 2025';
                document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025"> <img src="kiki.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Women’s History Month 2025 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';     
    
                document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025";
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "whm -":




            case "whm -stacey":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#stacey";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "whm -bailey":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#bailey";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -jennifer":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#jennifer";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "whm -angelina":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#angelina";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -lina":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#lina";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -rana":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#rana";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -nina":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#nina";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -lena":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#lena";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })
            

            case "whm -carolina":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#carolina";    
    
                    //We're going to change the value of the field again 
    
                })


                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "whm -ana":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#anastasia";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -lexie":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#lexie";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -sandra":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#sandra";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })



            case "whm -katie":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#katie";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "whm -laurie":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#laurie";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -grace":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#grace";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -ell":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#ell";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "whm -lily":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#lily";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "whm -kazel":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025#kazel";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "futabawhy":

            document.getElementById("testq").innerHTML = '🎃 Why Futaba Does Cyber Security!?';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber"> <img src="BatManWL.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Why Futaba Does Cyber Security!? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';     

            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "futabawhy -options":

            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: futabawhy -insights) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -background</p> <p>🎃 -insights</p> <p>🎃 -industry</p> <p>🎃 -outlook</p> <p></p>';



            case "futabawhy -background":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber#background";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })
            

            case "futabawhy -insights":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber#insights";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "futabawhy -industry":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber#industry";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "futabawhy -outlook":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber#outlook";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "resources":

            document.getElementById("testq").innerHTML = '🎃 FREE Resource? OR Opportunities?';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities"> <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">FREE Resource? OR Opportunities? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';     

            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "resources -ops":

            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: resources -enough) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -enough</p> <p>🎃 -opportunities</p> <p>🎃 -options</p> <p></p>';


            case "resources -enough":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities#enough";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "resources -opportunities":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities#opportunities";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


           




            case "exmachina":

            document.getElementById("testq").innerHTML = ' Ex Machina Parlor';
                document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor"> <img src="ExMachinaParlor.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Ex Machina Parlor 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';     
    
                //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor";
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
                        //window.location.href = "";
        
        
                        if (event.key === "Enter") {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            // Trigger the button element with a click
                            document.getElementById("submit").click();
                        }
                        //We're going to change the value of the field again 
        
                    })


            case "exmachina -lexie":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor#lexie";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "exmachina -exmachina":

            document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
                        //window.location.href = "";
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor#exmachina";    
        
                        //We're going to change the value of the field again 
        
                    })

                    document.getElementById("search").addEventListener('keypress', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
                        //window.location.href = "";
        
        
                        if (event.key === "Enter") {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            // Trigger the button element with a click
                            document.getElementById("submit").click();
                        }
                        //We're going to change the value of the field again 
        
                    })


            case "confluence":

            document.getElementById("testq").innerHTML = '🎃 Confluence LockBit Ransomware';
                document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1"> <img src="confluence.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Confluence LockBit Ransomware 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';     
    
                //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1";
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
                        //window.location.href = "";
        
        
                        if (event.key === "Enter") {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            // Trigger the button element with a click
                            document.getElementById("submit").click();
                        }
                        //We're going to change the value of the field again 
        
                    })


            case "confluence -confluence":


            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#confluence";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })

            case "confluence -cve":

            document.getElementById("submit").addEventListener('click', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#cve";    
    
                    //We're going to change the value of the field again 
    
                })

                document.getElementById("search").addEventListener('keypress', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
                        //window.location.href = "";
        
        
                        if (event.key === "Enter") {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            // Trigger the button element with a click
                            document.getElementById("submit").click();
                        }
                        //We're going to change the value of the field again 
        
                    })

            

            case "confluence -metasploit":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#metasploit";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence -mimikatz":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#mimikatz";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence -pdq":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#pdq";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence -anydesk":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#anydesk";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })



            case "confluence -lockbit":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#lockbit";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence -ransomware":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#ransomware";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence -smb":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#smb";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence -rclone":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1#rclone";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence -options":




            case "confluence2":

            document.getElementById("testq").innerHTML = '🎃 Confluence LockBit Ransomware (Pt2)';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2"> <img src="rclone.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Confluence LockBit Ransomware (Pt 2) 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div>';     

            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence2 -options":

            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: confluence2 -cve) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -attacktree</p> <p>🎃 -cve</p> <p>🎃 -shell</p> <p>🎃 -access</p> <p>🎃 -takeover5</p> <p>🎃 -rclone</p> <p>🎃 -lockbit</p> <p></p>';



            case "confluence2 -attacktree":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2#attacktree";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence2 -cve":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2#cve";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })
            

            case "confluence2 -shell":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2#shell";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence2 -access":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2#access";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence2 -takeover5":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2#takeover5";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "confluence2 -rclone":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2#rclone";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })



            case "confluence2 -lockbit":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2#lockbit";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content":

            document.getElementById("testq").innerHTML = "🎃 Futaba's Cyber Security Content";
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> ';     

            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -options":

            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: content -exploit) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -danger</p> <p>🎃 -exploit</p> <p>🎃 -toolguides</p> <p>🎃 -programming</p> <p>🎃 -electrical</p> <p>🎃 -malwarelabs</p> <p>🎃 -securecoding</p> <p>🎃 -mrrobot</p> <p>🎃 -labs</p> <p>🎃 -audibles</p> <p></p>';



            case "content -danger":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#danger";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -exploit":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#exploit";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -toolguides":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#toolguides";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -programming":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#programming";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -electrical":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#electrical";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -malwarelabs":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#malwarelabs";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })
            

            case "content -securecoding":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#securecoding";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -mrrobot":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#mrrobot";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -labs":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#labs";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "content -audibles":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent#audibles";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })
    



            case "vendor":

            document.getElementById("testq").innerHTML = '🎃 Should 3rd Party Vendors Be Trusted?';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted"> <img src="Should3rdPartyVendorsBeTrusted.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Should 3rd Party Vendors Be Trusted 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';     

            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "vendor -options":

            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: vendor -example) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -disclosure</p> <p>🎃 -example</p> <p></p>';



            case "vendor -disclosure":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted#disclosure";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "vendor -example":

            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted#example";    

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
                {
                    //The event is going to trigger a test alert message on the page
    
                    //alert('working');
                    //document.getElementById("testq").innerHTML = '';
                    //document.getElementById("testp").innerHTML = ''; 
                    //window.location.href = "";
    
    
                    if (event.key === "Enter") {
                        // Cancel the default action, if needed
                        event.preventDefault();
                        // Trigger the button element with a click
                        document.getElementById("submit").click();
                    }
                    //We're going to change the value of the field again 
    
                })


            case "futabagoal":

            document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
            document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs"> <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Goal Of Futaba_Webs 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         

            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "futabagoal -options":

            document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
            document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: futabagoal -tooldev) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -whitepaper</p> <p>🎃 -tooldev</p> <p>🎃 -contractor</p> <p>🎃 -evilhero</p> <p></p>'; 

            case "futabagoal -whitepaper":

            document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
                    document.getElementById("testp").innerHTML = '<div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs"> <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Goal Of Futaba_Webs 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs#whitepaper";
        
                        //We're going to change the value of the field again 
        
                    })

                    document.getElementById("search").addEventListener('keypress', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
                        //window.location.href = "";
        
        
                        if (event.key === "Enter") {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            // Trigger the button element with a click
                            document.getElementById("submit").click();
                        }
                        //We're going to change the value of the field again 
        
                    })


            case "futabagoal -tooldev":

            document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
            document.getElementById("testp").innerHTML = '<div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs"> <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Goal Of Futaba_Webs 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>'; 


            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs#tooldev";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })


            case "futabagoal -contractor":

            document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
                    document.getElementById("testp").innerHTML = '<div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs"> <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Goal Of Futaba_Webs 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs#contractor";
        
                        //We're going to change the value of the field again 
        
                    })

                    document.getElementById("search").addEventListener('keypress', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
                        //window.location.href = "";
        
        
                        if (event.key === "Enter") {
                            // Cancel the default action, if needed
                            event.preventDefault();
                            // Trigger the button element with a click
                            document.getElementById("submit").click();
                        }
                        //We're going to change the value of the field again 
        
                    })


            case "futabagoal -evilhero":

            document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
            document.getElementById("testp").innerHTML = '<div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs"> <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Goal Of Futaba_Webs 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>'; 


            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
            document.getElementById("submit").addEventListener('click', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 


                window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs#evilhero";

                //We're going to change the value of the field again 

            })

            document.getElementById("search").addEventListener('keypress', function(event)
            {
                //The event is going to trigger a test alert message on the page

                //alert('working');
                //document.getElementById("testq").innerHTML = '';
                //document.getElementById("testp").innerHTML = ''; 
                //window.location.href = "";


                if (event.key === "Enter") {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("submit").click();
                }
                //We're going to change the value of the field again 

            })
            

            case "home":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Home';
                    document.getElementById("testp").innerHTML = 'Takes you to the home page'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
            
    
            case "service":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Services';
                    document.getElementById("testp").innerHTML = 'Shows you all the services I offer'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://us.cypsec.xyz/offering/futaba";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "business card":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Business Card';
                    document.getElementById("testp").innerHTML = 'Takes you to my business card'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://linktr.ee/Futaba_Webs";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
        
    
                case "termux -f":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Terminal';
                    document.getElementById("testp").innerHTML = 'Brings you to terminal mode for the site'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/FullScreenMode.html";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "discord":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Discord';
                    document.getElementById("testp").innerHTML = 'Brings you to my Discord server'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://discord.gg/kHnjJ9Ew86";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
    
    
               case "resume -d":
              
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Resume';
                    document.getElementById("testp").innerHTML = 'Auto downloads a repo of my resume credentials'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "red city":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Red City';
                    document.getElementById("testp").innerHTML = '<div id="portfolio" class="section"> <div class="container"> <div class="row"> <div class="col-md-12"> </div> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://roymbull.github.io/"> <img src="images/futaba 8.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">Roy M Bull </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> </div> </div> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://roymbull.github.io/";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
    
    
                case "purple city":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Purple City';
                    document.getElementById("testp").innerHTML = '<div id="portfolio" class="section"> <div class="container"> <div class="row"> <div class="col-md-12"> </div> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/"> <img src="images/futaba 7.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">Futaba_Webs</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div> </div> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
            
    
               case "linkedin":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 LinkedIn';
                    document.getElementById("testp").innerHTML = '<div id="portfolio" class="section"> <div class="container"> <div class="row"> <div class="col-md-12"> </div> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://www.linkedin.com/in/roy-bull-futaba-webs-2091501b7/"> <img src="images/futaba 6.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">LinkedIn</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div> </div> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://www.linkedin.com/in/roy-bull-futaba-webs-2091501b7/";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
    
    
    
                      //(BUTTONS ON THE BANNERS)
            case "features":
               
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Features';
                    document.getElementById("testp").innerHTML = '<div id="portfolio" class="section"> <div class="container"> <div class="row"> <div class="col-md-12"> </div> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/MoreFeatures.html"> <img src="images/Features.jpeg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">Features </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> </div> </div> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/MoreFeatures.html";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
            case "articles":
                   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Articles (Purple City)';
                    document.getElementById("testp").innerHTML = '<div id="portfolio" class="section"> <div class="container"> <div class="row"> <div class="col-md-12"> </div> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/MoreArticles.html"> <img src="images/Articles.jpeg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">Articles</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div> </div> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/MoreArticles.html";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "projects":
            
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Projects';
                    document.getElementById("testp").innerHTML = '<div id="portfolio" class="section"> <div class="container"> <div class="row"> <div class="col-md-12"> </div> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/MoreProjects.html"> <img src="images/Projects.jpeg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">Projects</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div> </div> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/MoreProjects.html";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
            
    
                case "termux -tour":
            
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Terminal Mode Tour';
                    document.getElementById("testp").innerHTML = '<div id="portfolio" class="section"> <div class="container"> <div class="row"> <div class="col-md-12"> </div> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://youtu.be/oyIBaCI-k0U"> <img src="images/asian2.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">Terminal Mode</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div> </div> </div> </div>'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://youtu.be/oyIBaCI-k0U";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "linkedin blogs":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = "🎃 Futaba_Web's Blogs";
                    document.getElementById("testp").innerHTML = 'Takes you to my LinkedIn catalog'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://www.linkedin.com/in/roy-bull-futaba-webs-2091501b7/recent-activity/articles/";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "rss feed":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = "🎃 Futaba_Web's RSS Feed";
                    document.getElementById("testp").innerHTML = 'Takes you to all my recent LinkedIn posts'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://www.linkedin.com/in/roy-bull-futaba-webs-2091501b7/recent-activity/all/";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "github":
                  
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = "🎃 Futaba_Web's Github ";
                    document.getElementById("testp").innerHTML = 'Takes you to my GitHub Page'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://github.com/RoyMBull/READ-ME";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "donate":
                
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Donate ';
                    document.getElementById("testp").innerHTML = 'Takes you to my CashApp (Donation Page)'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://cash.app/$FutabaWebs";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "patreon":
            
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Patreon';
                    document.getElementById("testp").innerHTML = 'Takes you to my Patreon'; 
        
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://www.patreon.com/Futaba_Webs";
        
                        //We're going to change the value of the field again 
        
                    })
    
                    document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
          
                
    
                case "business page":
                    
                        //This is where the intelisense logic takes place
                            //We need to convert one of the portfploo buttons into a line of html
                        
                        //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                        document.getElementById("testq").innerHTML = '🎃 Business Page';
                        document.getElementById("testp").innerHTML = 'Takes you to my business page'; 
            
            
                        //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                        document.getElementById("submit").addEventListener('click', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
            
            
                            window.location.href = "http://linkedin.com/company/futaba-webs/";
            
                            //We're going to change the value of the field again 
            
                        })
    
                        document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
              
                    
    
                    case "resume -repo":
                         
                            //This is where the intelisense logic takes place
                                //We need to convert one of the portfploo buttons into a line of html
                            
                            //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                            document.getElementById("testq").innerHTML = '🎃 Resume Repo';
                            document.getElementById("testp").innerHTML = 'Takes you to my Resume Repo'; 
                
                
                            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                            document.getElementById("submit").addEventListener('click', function(event)
                            {
                                //The event is going to trigger a test alert message on the page
                
                                //alert('working');
                                //document.getElementById("testq").innerHTML = '';
                                //document.getElementById("testp").innerHTML = ''; 
                
                
                                window.location.href = "https://github.com/RoyMBull/Resumes";
                
                                //We're going to change the value of the field again 
                
                            })
    
                            document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
                  
                        
    
                        case "catalog":
                             
                                //This is where the intelisense logic takes place
                                    //We need to convert one of the portfploo buttons into a line of html
                                
                                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                                document.getElementById("testq").innerHTML = '🎃 Catalog';
                                document.getElementById("testp").innerHTML = '<div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible"> <img src="futaba 6.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Is TCM Security Still Credible? 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand"> <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;">How to Build Your Personal Brand? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025"> <img src="kiki.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Women’s History Month 2025 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber"> <img src="BatManWL.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Why Futaba Does Cyber Security!? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities"> <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">FREE Resource? OR Opportunities? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor"> <img src="ExMachinaParlor.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Ex Machina Parlor 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1"> <img src="confluence.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Confluence LockBit Ransomware 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2"> <img src="rclone.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Confluence LockBit Ransomware (Pt 2) 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent"> <img src="FutabasCyberSecurityContent.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Futabas Cyber Security Content 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted"> <img src="Should3rdPartyVendorsBeTrusted.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Should 3rd Party Vendors Be Trusted 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/ArticleCatalog"> <img src="Welcome Tier.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;">Article Catalog 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>'; 
                    
                    
                                //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                                document.getElementById("submit").addEventListener('click', function(event)
                                {
                                    //The event is going to trigger a test alert message on the page
                    
                                    //alert('working');
                                    //document.getElementById("testq").innerHTML = '';
                                    //document.getElementById("testp").innerHTML = ''; 
                    
                    
                                    window.location.href = "https://futabawebs.github.io/Futaba_Webs/ArticleCatalog#portfolio";
                    
                                    //We're going to change the value of the field again 
                    
                                })
    
                                document.getElementById("search").addEventListener('keypress', function(event)
                        {
                            //The event is going to trigger a test alert message on the page
            
                            //alert('working');
                            //document.getElementById("testq").innerHTML = '';
                            //document.getElementById("testp").innerHTML = ''; 
                            //window.location.href = "";
            
            
                            if (event.key === "Enter") {
                                // Cancel the default action, if needed
                                event.preventDefault();
                                // Trigger the button element with a click
                                document.getElementById("submit").click();
                            }
                            //We're going to change the value of the field again 
            
                        })
                      
                            
    
    
                            case "help":
                                   
                                    //This is where the intelisense logic takes place
                                        //We need to convert one of the portfploo buttons into a line of html
                                    
                                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                                    document.getElementById("testq").innerHTML = '🕸🎃🕸 General Commands🕸🎃🕸';
                                    document.getElementById("testp").innerHTML = "</br> 🎃 help -a -> Shows you all the Advanced Commands </br> </br> 🎃 service -> Shows you all the services I offer </br> </br> 🎃 business card -> Takes you to my business card </br> </br> 🎃 termux -f -> Brings you to terminal mode for the site </br> </br> 🎃 discord -> Brings you to my Discord server </br> </br> 🎃 resume -d -> Auto downloads a repo of my resume credentials </br> </br> 🎃 red city -> Takes you to a custom version of my site </br> </br> 🎃 purple city -> Takes you to a custom version of my site </br> </br> 🎃 linkedin -> Takes you to my LinkedIn page </br> </br> 🎃 features -> Takes you to all of my featured content </br> </br> 🎃 projects -> Takes you to my featured projects </br> </br> 🎃 articles -> Takes you to a custom version of my article catalog </br> </br> 🎃 terminal -tour -> Takes you to a video tour of Terminal Mode </br> </br> 🎃 linkedin blogs -> Takes you to my LinkedIn article catalog </br> </br> 🎃 rss feed -> Takes you to a feed of all my recent LinkedIn posts </br> </br> 🎃 github -> Takes you to my GitHub page </br> </br> 🎃 donate -> Takes you to my CasahApp (Donation Page) </br> </br> 🎃 patreon -> Takes you to my Patreon </br> </br> 🎃 business page -> Takes you to my business page </br> </br> 🎃 resume -repo -> Takes you to my Resume Repo"; 
                    
                          
                            
    
                            case "help -a":
                                
                                    //This is where the intelisense logic takes place
                                        //We need to convert one of the portfploo buttons into a line of html
                                    
                                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                                    document.getElementById("testq").innerHTML = '🕸🎃🕸 Advanced Commands🕸🎃🕸';
                                    document.getElementById("testp").innerHTML = "<p></p> <p>🎃 help -> Shows you all the General Commands </br> </br> (Article Commands) 🕸🕸🎃🕸🕸 </br></br> Takes you to certain sections in an article </p> <p></p> <p>Run any of the following options (Ex: tcm -revoke) in order to jump to a particular section anywhere on the site.</p> <p></p> <p> </p> <p></p> <p> </br></br>(tcm) </p> <p>🎃 -revoke</p> <p>🎃 -stance</p> <p>🎃 -suspicions</p> <p>🎃 -lying</p> <p>🎃 -revised</p> <p>🎃 -truth</p> <p>🎃 -reliable</p> <p>🎃 -afterthoughts</p> <p></p> <p> </br></br>(brandp)</p> <p>🎃 -endgoal</p> <p>🎃 -authentic</p> <p>🎃 -gettingseen</p> <p>🎃 -community</p> <p>🎃 -capitalize</p> <p></p> <p> </br></br>(whm)</p> <p>🎃 -stacey</p> <p>🎃 -bailey</p> <p>🎃 -jennifer</p> <p>🎃 -angelina</p> <p>🎃 -lina</p> <p>🎃 -rana</p> <p>🎃 -nina</p> <p>🎃 -lena</p> <p>🎃 -carolina</p> <p>🎃 -ana</p> <p>🎃 -lexie</p> <p>🎃 -sandra</p> <p>🎃 -katie</p> <p>🎃 -laurie</p> <p>🎃 -grace</p> <p>🎃 -ell</p> <p>🎃 -lily</p> <p>🎃 -kazel</p> <p></p> <p> </br></br>(futabawhy)</p> <p>🎃 -background</p> <p>🎃 -insights</p> <p>🎃 -industry</p> <p>🎃 -outlook</p> <p></p> <p> </br></br>(resources)</p> <p>🎃 -enough</p> <p>🎃 -opportunities</p> <p>🎃 -options</p> <p></p> <p> </br></br>(exmachina)</p> <p>🎃 -exmachina</p> <p>🎃 -lexie</p> <p></p> <p> </br></br>(confluence)</p> <p>🎃 -confluence</p> <p>🎃 -cve</p> <p>🎃 -metasploit</p> <p>🎃 -mimikatz</p> <p>🎃 -pdq</p> <p>🎃 -anydesk</p> <p>🎃 -lockbit</p> <p>🎃 -ransomware</p> <p>🎃 -smb</p> <p>🎃 -rclone</p> <p></p> <p> </br></br>(confluence2)</p> <p>🎃 -attacktree</p> <p>🎃 -cve</p> <p>🎃 -shell</p> <p>🎃 -access</p> <p>🎃 -takeover5</p> <p>🎃 -rclone</p> <p>🎃 -lockbit</p> <p></p> <p> </br></br>(content)</p> <p>🎃 -danger</p> <p>🎃 -exploit</p> <p>🎃 -toolguides</p> <p>🎃 -programming</p> <p>🎃 -electrical</p> <p>🎃 -malwarelabs</p> <p>🎃 -securecoding</p> <p>🎃 -mrrobot</p> <p>🎃 -labs</p> <p>🎃 -audibles</p> <p></p> <p> </br></br>(vendor)</p> <p>🎃 -disclosure</p> <p>🎃 -example</p> <p></p> <p></p>"; 
                    
                          
                            default:
    
                            document.getElementById("testq").innerHTML = '<h2>Futaba_Webs 🕸🕸🎃🕸🕸</h2> <p> Run the "Help" Command</p> <p> "Shift-Alt-P" (Opens Search Mode)</p> </br> <ul id="myUL" style = "list-style-type: none;"> <li><a href="https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Is TCM Security Still Credible? <img src="futaba 6.jpg" class="img-responsive" alt="portfolio img"></a></li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Build Your Personal Brand? <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025"style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Womens History Month 2025 <img src="kiki.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Why Futaba Does Cyber Security!? <img src="BatManWL.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Resource? OR Opportunities? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br>   <li><a href="https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Ex Machina Parlor <img src="ExMachinaParlor.jpeg" class="img-responsive" alt="portfolio img"></a> </li></br> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware <img src="confluence.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware (Part 2) <img src="rclone.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Futabas Cyber Security Content <img src="FutabasCyberSecurityContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted" style = "text-decoration: none; color: #D43F52; font-weight: bold;"> 🎃 Should 3rd Party Vendors Be Trusted? <img src="Should3rdPartyVendorsBeTrusted.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ArticleCatalog#portfolio" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Catalog Page <img src="Welcome Tier.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Goal Of Futaba_Webs <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img"></a> </li></br> </ul>';
                
    


    //End of Switch Case
        }



            

    
    
    });