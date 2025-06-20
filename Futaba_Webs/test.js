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

////////////////////////////////////////////////Resume Script Handlers


//Handles DarkMode Modal Logic
function DarkModeModalLoad()
{    
    document.getElementById("dmode").innerHTML = '<img src = "DarkMode1.png" class="img-responsive" alt="portfolio img"/> <img src = "DarkMode2.png" class="img-responsive" alt="portfolio img"/>';
}

function DarkModeModalUnload()
{    
    document.getElementById("dmode").innerHTML = '';
}



//Handles LightMode Modal Logic
function LightModeModalLoad()
{    
    document.getElementById("lmode").innerHTML = '<img src = "LightMode1.png" class="img-responsive" alt="portfolio img"/> <img src = "LightMode2.png" class="img-responsive" alt="portfolio img"/>';
}

function LightModeModalUnload()
{    
    document.getElementById("lmode").innerHTML = '';
}



//Handles WordMode Modal Logic
function WordModeModalLoad()
{    
    document.getElementById("wmode").innerHTML = '<img src = "WordVersion1.png" class="img-responsive" alt="portfolio img"/> <img src = "WordVersion2.png" class="img-responsive" alt="portfolio img"/>';
}

function WordModeModalUnload()
{    
    document.getElementById("wmode").innerHTML = '';
}



//This is for the "DarkMode Modal"
$('#darkmode').on('show.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    DarkModeModalLoad();
})

$('#darkmode').on('hide.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    DarkModeModalUnload();
})




//This is for the "LightMode Modal"
$('#lightmode').on('show.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    LightModeModalLoad();
})

$('#lightmode').on('hide.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    LightModeModalUnload();
})




//This is for the "WordMode Modal"
$('#wordmode').on('show.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    WordModeModalLoad();
})

$('#wordmode').on('hide.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    WordModeModalUnload();
})


////////////////////////////////////////////////End of Resume Script Handlers


//Loads the catalog list
function ModalLoad()
{    
    document.getElementById("testq").innerHTML = '<h2>Futaba_Webs 🕸🕸🎃🕸🕸</h2> <p> Run the "Help" Command</p> <p> "Shift-Alt-P" (Opens Search Mode)</p> </br> <ul id="myUL" style = "list-style-type: none;"> <li><a href="https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Is TCM Security Still Credible? <img src="futaba 6.jpg" class="img-responsive" alt="portfolio img"></a></li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Build Your Personal Brand? <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025"style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Womens History Month 2025 <img src="kiki.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Why Futaba Does Cyber Security!? <img src="BatManWL.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Resource? OR Opportunities? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br>   <li><a href="https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Ex Machina Parlor <img src="ExMachinaParlor.jpeg" class="img-responsive" alt="portfolio img"></a> </li></br> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware <img src="confluence.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware (Part 2) <img src="rclone.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Futabas Cyber Security Content <img src="FutabasCyberSecurityContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted" style = "text-decoration: none; color: #D43F52; font-weight: bold;"> 🎃 Should 3rd Party Vendors Be Trusted? <img src="Should3rdPartyVendorsBeTrusted.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ArticleCatalog#portfolio" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Catalog Page <img src="Welcome Tier.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Goal Of Futaba_Webs <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img"></a> </li></br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Art of Code Analysis <img src="TheArtofCodeAnalysis.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlaw" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Cyber Securitys BIGGEST Flaw! <img src="CyberSecuritysBIGGESTFlaw.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br>  <li><a href="https://futabawebs.github.io/Futaba_Webs/TypesOfHackers" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Types Of Hackers <img src="TypesOfHackers.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Vs PAID Learning Which is Better? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/SubnettingForDummies" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Subnetting For Dummies <img src="subnettingdiagram.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Specialist VS Generalist? <img src="SpecialistVsGeneralist.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/BondBetweenTeacherAndStudent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Bond Between Teacher And Student <img src="BondBetweenTeacherAndStudent.avif" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/OOPForDummies" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 OOP For Dummies <img src="OOPForDummies.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Do Certs Still Matter? <img src="DoCertsStillMatter.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheEvilHERO" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Evil HERO <img src="TheEvilHERO.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheKernel" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Kernel <img src="TheKernel.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The One Above All <img src="TheOneAboveAll.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 CrowdStrikes Foul Play <img src="CrowdStrikesFoulPlay.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Documenting Your Journey <img src="DocumentingYourJourney.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Best Programming Languages For Cyber <img src="BestProgrammingLanguagesForCyber.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 More Training Programs <img src="MoreTrainingPrograms.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToCreateContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How To Create Content <img src="HowToCreateContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The KeyBoard Injection FrameWork <img src="TheKeyBoardInjectionFrameWork.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Get More Women In Tech <img src="HowtoGetMoreWomenInTech.png" class="img-responsive" alt="portfolio img"></a> </li> </br> </ul>';
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
      


        //Split this into on

        //(TCM Article)
        if (command == "tcm")
        {   
            
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

            if (command == "tcm -b")
            {
                alert ("Hello wolrd");
            }
  
        }

        else if (command == "tcm -options")
        {
            document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: tcm -revoke) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -revoke</p> <p>🎃 -stance</p> <p>🎃 -suspicions</p> <p>🎃 -lying</p> <p>🎃 -revised</p> <p>🎃 -truth</p> <p>🎃 -reliable</p> <p>🎃 -afterthoughts</p> <p></p>';

        }

        //OPTIONS FOR TCM
        else if (command == "tcm -revoke")
        {       
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
        }

       else if (command == "tcm -stance")
        {
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

        }

        else if (command == "tcm -suspicions")
        {
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

        }

       else  if (command == "tcm -lying")
        {
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

        }

        else if (command == "tcm -revised")
        {
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

        }

        else if (command == "tcm -truth")
        {
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

        }

        else if (command == "tcm -reliable")
        {
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

        }

        else if (command == "tcm -afterthoughts")
        {
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

        }





        //(Personal Brand Article)
        else if (command == "brandp")
            {   
                
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
      
            }
    
            else if (command == "brandp -options")
            {
                document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: brandp -endgoal) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -endgoal</p> <p>🎃 -authentic</p> <p>🎃 -gettingseen</p> <p>🎃 -community</p> <p>🎃 -capitalize</p> <p></p>';
    
            }
    

            //OPTIONS FOR PERSONAL BRAND ARTICLE
            else if (command == "brandp -endgoal")
            {
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
            }

            else if (command == "brandp -authentic")
            {
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
            }

            else if (command == "brandp -gettingseen")
            {
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
            }

            else if (command == "brandp -community")
            {
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
            }

            else if (command == "brandp -capitalize")
            {
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
            }


            
            


        //(Women's History Month Article)
        else if (command == "whm")
            {   
               
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
      
            }
    
            else if (command == "whm -options")
            {
                document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: whm -stacey) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -stacey</p> <p>🎃 -bailey</p> <p>🎃 -jennifer</p> <p>🎃 -angelina</p> <p>🎃 -lina</p> <p>🎃 -rana</p> <p>🎃 -nina</p> <p>🎃 -lena</p> <p>🎃 -carolina</p> <p>🎃 -ana</p> <p>🎃 -lexie</p> <p>🎃 -sandra</p> <p>🎃 -katie</p> <p>🎃 -laurie</p> <p>🎃 -grace</p> <p>🎃 -ell</p> <p>🎃 -lily</p> <p>🎃 -kazel</p> <p></p>';
    
            }
    
            //OPTIONS FOR WOMEN'S HISTORY 2025 ARTICLE
            else if (command == "whm -stacey")
            {
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
            }

            else if (command == "whm -bailey")
            {
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
            }

            else if (command == "whm -jennifer")
            {
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
            }

            else if (command == "whm -angelina")
            {
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
            }

            else if (command == "whm -lina")
            {
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
            }

            else if (command == "whm -rana")
            {
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
            }

            else if (command == "whm -nina")
            {
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
            }

            else if (command == "whm -lena")
            {
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
            }

            else if (command == "whm -carolina")
            {
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
            }

            else if (command == "whm -ana")
            {
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
            }

            else if (command == "whm -lexie")
            {
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
            }

            
            else if (command == "whm -sandra")
            {
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
            }

            else if (command == "whm -katie")
            {
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
            }

            else if (command == "whm -laurie")
            {
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
            }

            else if (command == "whm -grace")
            {
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
            }

            else if (command == "whm -ell")
            {
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
            }

            else if (command == "whm -lily")
            {
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
            }

            else if (command == "whm -kazel")
            {
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
            }

            



            //(Why Futaba does Cyber Article)
        //For now we're just going to have it direct us to different articles on the pae
        else if (command == "futabawhy")
            {   
                //This is where the intelisense logic takes place
                    //We need to convert one of the portfploo buttons into a line of html
                
                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
      
            }


            else if (command == "futabawhy -options")
                {
                    document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: futabawhy -insights) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -background</p> <p>🎃 -insights</p> <p>🎃 -industry</p> <p>🎃 -outlook</p> <p></p>';
        
                }

             else if (command == "futabawhy -background")
            {
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
            }

             else if (command == "futabawhy -insights")
            {
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
            }

             else if (command == "futabawhy -industry")
            {
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
            }

             else if (command == "futabawhy -outlook")
            {
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
            }

        //( Article)
        //For now we're just going to have it direct us to different articles on the pae
        else if (command == "resources")
            {   
                //This is where the intelisense logic takes place
                    //We need to convert one of the portfploo buttons into a line of html
                
                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
      
            }

            else if (command == "resources -ops")
                {
                    document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: resources -enough) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -enough</p> <p>🎃 -opportunities</p> <p>🎃 -options</p> <p></p>';
        
                }
            
            //OPTIONS FOR RESOURCES ARTICLE
            else if (command == "resources -enough")
                {
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
                }

            else if (command == "resources -opportunities")
                {
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
                }

                       
                


        //(Ex Machina Parlor Article)
        //For now we're just going to have it direct us to different articles on the pae
        else if (command == "exmachina")
            {   
                //This is where the intelisense logic takes place
                    //We need to convert one of the portfploo buttons into a line of html
                
                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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

                
      
            }

            
            else if (command == "exmachina -options")
            {
                document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: exmachina -lexie) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -exmachina</p> <p>🎃 -lexie</p> <p></p>';
    
            }
            
            else if (command == "exmachina -exmachina")
                {
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
                }

            else if (command == "exmachina -lexie")
                {
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
                }


        

        //(Confluence Article)
        //For now we're just going to have it direct us to different articles on the pae
        else if (command == "confluence")
            {   
                //This is where the intelisense logic takes place
                    //We need to convert one of the portfploo buttons into a line of html
                
                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
      
            }
    
            else if (command == "confluence -options")
            {
                document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: tcm -revoke) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -confluence</p> <p>🎃 -cve</p> <p>🎃 -metasploit</p> <p>🎃 -mimikatz</p> <p>🎃 -pdq</p> <p>🎃 -anydesk</p> <p>🎃 -lockbit</p> <p>🎃 -ransomware</p> <p>🎃 -smb</p> <p>🎃 -rclone</p> <p></p>';
    
            }
    

            else if (command == "confluence -confluence")
            {
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
            }

            else if (command == "confluence -cve")
            {
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
            }

            else if (command == "confluence -metasploit")
            {
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
            }

            else if (command == "confluence -mimikatz")
            {
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
            }

            else if (command == "confluence -pdq")
            {
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
            }

            else if (command == "confluence -anydesk")
            {
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
            }

            else if (command == "confluence -lockbit")
            {
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
            }

            else if (command == "confluence -ransomware")
            {
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
            }

            else if (command == "confluence -smb")
            {
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
            }

            else if (command == "confluence -rclone")
            {
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
            }



          //(Confluence2 Article)
        //For now we're just going to have it direct us to different articles on the pae
        else if (command == "confluence2")
            {   
                //This is where the intelisense logic takes place
                    //We need to convert one of the portfploo buttons into a line of html
                
                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
      
            }
            
            else if (command == "confluence2 -options")
                {
                    document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: confluence2 -cve) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -attacktree</p> <p>🎃 -cve</p> <p>🎃 -shell</p> <p>🎃 -access</p> <p>🎃 -takeover5</p> <p>🎃 -rclone</p> <p>🎃 -lockbit</p> <p></p>';
        
                }


            //OPTIONS FOR CONFLUENCE
             else if (command == "confluence2 -attacktree")
            {
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
            }

             else if (command == "confluence2 -cve")
            {
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
            }

             else if (command == "confluence2 -shell")
            {
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
            }

             else if (command == "confluence2 -access")
            {
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
            }

             else if (command == "confluence2 -takeover5")
            {
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
            }

             else if (command == "confluence2 -rclone")
            {
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
            }

             else if (command == "confluence2 -lockbit")
            {
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
            }

            
        //(Futaba's Content Article)
        //For now we're just going to have it direct us to different articles on the pae
        else if (command == "content")
            {   
                //This is where the intelisense logic takes place
                    //We need to convert one of the portfploo buttons into a line of html
                
                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
      
            }

            else if (command == "content -options")
                {
                    document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: content -exploit) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -danger</p> <p>🎃 -exploit</p> <p>🎃 -toolguides</p> <p>🎃 -programming</p> <p>🎃 -electrical</p> <p>🎃 -malwarelabs</p> <p>🎃 -securecoding</p> <p>🎃 -mrrobot</p> <p>🎃 -labs</p> <p>🎃 -audibles</p> <p></p>';
        
                }

            
            else if (command == "content -danger")
            {
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
            }

            else if (command == "content -exploit")
            {
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
            }

            else if (command == "content -toolguides")
            {
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
            }

            else if (command == "content -programming")
            {
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
            }

            else if (command == "content -electrical")
            {
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
            }

            else if (command == "content -malwarelabs")
            {
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
            }

            else if (command == "content -securecoding")
            {
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
            }

            else if (command == "content -mrrobot")
            {
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
            }

            else if (command == "content -labs")
            {
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
            }

            else if (command == "content -audibles")
            {
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
            }



        //(Trusting 3rd parties Article)
        //For now we're just going to have it direct us to different articles on the pae
        else if (command == "vendor")
            {   
                //This is where the intelisense logic takes place
                    //We need to convert one of the portfploo buttons into a line of html
                
                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
      
            }
    
            else if (command == "vendor -options")
            {
                document.getElementById("testq").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: vendor -example) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -disclosure</p> <p>🎃 -example</p> <p></p>';
    
            }
    

            else if (command == "vendor -disclosure")
            {
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
            }


            else if (command == "vendor -example")
            {
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
            }



            else if (command == "futabagoal") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning"> <img src="FREEVsPaidLearning.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> FREE Vs PAID Learning? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div> </div>';         
        
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
          
                }

                else if (command == "futabagoal -options")
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 The Goal Of Futaba_Webs';
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: futabagoal -tooldev) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -whitepaper</p> <p>🎃 -tooldev</p> <p>🎃 -contractor</p> <p>🎃 -evilhero</p> <p></p>'; 
          
                }

                else if (command == "futabagoal -whitepaper")
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
          
                }

                else if (command == "futabagoal -tooldev")
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
          
                }

                else if (command == "futabagoal -contractor")
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
          
                }
                
                else if (command == "futabagoal -evilhero")
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
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
          
                }


                else if (command == "coder") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 The Art of Code Analysis';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis"> <img src="TheArtofCodeAnalysis.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Art of Code Analysis 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis";
        
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
          
                }

                else if (command == "coder -options") //Come patch this later
                {   
                   
                    document.getElementById("testq").innerHTML = '🎃 The Art of Code Analysis';
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: coder -language) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -language</p> <p>🎃 -system</p> <p>🎃 -document</p> <p>🎃 -exploit</p> <p></p>'; 
                }

                else if (command == "coder -language") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis#language";
        
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
          
                }

                else if (command == "coder -system") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis#system";
        
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
          
                }

                else if (command == "coder -document") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis#document";
        
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
          
                }

                else if (command == "coder -exploit") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis#exploit";
        
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
          
                }


                else if (command == "cyberflaw") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Cyber Securitys BIGGEST Flaw!';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlaw"> <img src="CyberSecuritysBIGGESTFlaw.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Cyber Securitys BIGGEST Flaw! 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlaw";
        
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
          
                }

                else if (command == "cyberflaw -options") //Come patch this later
                {   
                   document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: cyberflaw -talent) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -disclosure</p> <p>🎃 -emphasis</p> <p>🎃 -talent</p> </p>'; 
                }

                else if (command == "cyberflaw -disclosure") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlaw#disclosure";
        
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
          
                }

                else if (command == "cyberflaw -emphasis") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlawemphasis#";
        
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
          
                }

                else if (command == "cyberflaw -talent") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlaw#talent";
        
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
          
                }


                else if (command == "oop") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 OOP For Dummies';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/OOPForDummies"> <img src="OOPForDummies.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> OOP For Dummies 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/OOPForDummies";
        
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
          
                }

                else if (command == "oop -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: oop -wht) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -wht</p> <p>🎃 -members</p> </p>'; 
                }

                else if (command == "oop -wht") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/OOPForDummies#OOP";
        
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
          
                }

                else if (command == "oop -members") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/OOPForDummies#members";
        
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
          
                }


                else if (command == "bond") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Bond Between Teacher And Student';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/BondBetweenTeacherAndStudent"> <img src="BondBetweenTeacherAndStudent.avif" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Bond Between Teacher And Student 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/BondBetweenTeacherAndStudent";
        
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
          
                }

                else if (command == "bond -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: bond -student) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -student</p> <p>🎃 -teacher</p> </p>'; 
                }

                else if (command == "bond -student") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/BondBetweenTeacherAndStudent#student";
        
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
          
                }

                else if (command == "bond -teacher") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/BondBetweenTeacherAndStudent#teacher";
        
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
          
                }

                else if (command == "spec") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Specialist VS Generalist?';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist"> <img src="SpecialistVsGeneralist.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Specialist VS Generalist? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist";
        
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
          
                }

                else if (command == "spec -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: spec -specialist) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -specialist</p> <p>🎃 -specialpro</p> <p>🎃 -generalist</p> <p>🎃 -versatilepro</p> <p>🎃 -better</p> </p>'; 
                }

                else if (command == "spec -specialist") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist#specialist";
        
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
          
                }

                else if (command == "spec -specialistpro") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist#specialistpro";
        
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
          
                }

                else if (command == "spec -versatilepro") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist#versatilepro";
        
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
          
                }

                else if (command == "spec -generalist") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist#generalist";
        
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
          
                }

                else if (command == "spec -better") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist#better";
        
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
          
                }

               
                else if (command == "resources2") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 FREE Vs PAID Learning';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning"> <img src="FREEVsPaidLearning.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> FREE Vs PAID Learning? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning";
        
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
          
                }

                else if (command == "resources2 -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: resources2 -freelearning) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -freelearning</p> <p>🎃 -exist</p> <p>🎃 -goingaboutit</p> <p>🎃 -drawbacks</p> <p>🎃 -mentorship</p> <p>🎃 -redundancy</p> <p>🎃 -paying</p> </p>'; 
                }

                else if (command == "resources2 -freelearning") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning#freelearning";
        
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
          
                }

                else if (command == "resources2 -exist") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning#exist";
        
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
          
                }

                else if (command == "resources2 -goingaboutit") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning#goingaboutit";
        
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
          
                }

                else if (command == "resources2 -drawbacks") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning#drawbacks";
        
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
          
                }

                else if (command == "resources2 -mentorship") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning#mentorship";
        
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
          
                }

                else if (command == "resources2 -redundancy") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning#redundancy";
        
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
          
                }

                else if (command == "resources2 -paying") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning#paying";
        
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
          
                }

               
                else if (command == "sub") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Subnetting For Dummies';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/SubnettingForDummies"> <img src="SubnettingForDummies.webp" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Subnetting For Dummies 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SubnettingForDummies";
        
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
          
                }

                else if (command == "sub -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: sub -subnetting) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -subnetting</p> <p>🎃 -cyber</p> </p>'; 
                }

                else if (command == "sub -subnetting") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SubnettingForDummies#subnetting";
        
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
          
                }


                else if (command == "sub -cyber") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/SubnettingForDummies#cyber";
        
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
          
                }

                else if (command == "hunter") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Types Of Hackers';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TypesOfHackers"> <img src="TypesOfHackers.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Types Of Hackers 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TypesOfHackers";
        
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
          
                }

                else if (command == "hunter -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: hunter -network) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -network</p> <p>🎃 -web</p> <p>🎃 -api</p> <p>🎃 -mobile</p> </p>'; 
                }

                else if (command == "hunter -network") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TypesOfHackers#networksecurity";
        
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
          
                }


                else if (command == "hunter -web") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TypesOfHackers#webpentesting";
        
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
          
                }

                else if (command == "hunter -api") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TypesOfHackers#APIPentesting";
        
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
          
                }

                else if (command == "hunter -mobile") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TypesOfHackers#mobilepentesting";
        
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
          
                }



                else if (command == "certs") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Do Certs Still Matter?';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter"> <img src="DoCertsStillMatter.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Do Certs Still Matter? 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter";
        
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
          
                }

                else if (command == "certs -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: certs -cert) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -cert</p> <p>🎃 -benefits</p> <p>🎃 -drawbacks</p> <p>🎃 -whichone</p> 🎃 -exp</p> 🎃 -expdrw</p> 🎃 -better</p> </p>'; 
                }

            

                else if (command == "certs -cert") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter#certifications";
        
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
          
                }

            else if (command == "certs -benefits") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter#certbenefits";
        
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
          
                }

                else if (command == "certs -drawbacks") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter#certdrawbacks";
        
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
          
                }

                else if (command == "certs -whichone") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter#whichones";
        
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
          
                }

                else if (command == "certs -exp") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter#experience";
        
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
          
                }

                else if (command == "certs -expdrw") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter#onlyexperience";
        
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
          
                }

                else if (command == "certs -better") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter#better";
        
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
          
                }

                else if (command == "evilhero") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 The Evil HERO';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheEvilHERO"> <img src="TheEvilHERO.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Evil HERO🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheEvilHERO";
        
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
          
                }

                else if (command == "evilhero -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: evilhero -gray) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -gray</p> <p>🎃 -hunter</p> <p>🎃 -why</p> <p>🎃 -inspire</p> 🎃 -anti</p></p>'; 
                }

                else if (command == "evilhero -gray") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheEvilHERO#grayhat";
        
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
          
                }

                else if (command == "evilhero -hunter") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheEvilHERO#hunter";
        
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
          
                }

                else if (command == "evilhero -why") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheEvilHERO#reason";
        
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
          
                }

                else if (command == "evilhero -inspire") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheEvilHERO#hunt";
        
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
          
                }

                else if (command == "evilhero -anti") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheEvilHERO#evilhero";
        
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
          
                }


            else if (command == "kern") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 The Kernel';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheKernel"> <img src="TheKernel.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The Kernel 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKernel";
        
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
          
                }

                else if (command == "kern -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: kern -kern) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -kern</p> <p>🎃 -access</p> <p>🎃 -cs</p> </p>'; 
                }

                else if (command == "kern -kern") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKernel#kernel";
        
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
          
                }

                else if (command == "kern -access") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKernel#access";
        
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
          
                }

                else if (command == "kern -cs") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKernel#crowdstrike";
        
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
          
                }

                

                else if (command == "aboveall") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 The One Above All';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll"> <img src="TheOneAboveAll.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The One Above All 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll";
        
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
          
                }

                else if (command == "aboveall -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: aboveall -iq) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -iq</p> <p>🎃 -creative</p> <p>🎃 -persist</p> <p>🎃 -science</p> 🎃 -social</p> </p>'; 
                }

                else if (command == "aboveall -iq") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll#iq";
        
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
          
                }

                else if (command == "aboveall -creative") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll#ingenious";
        
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
          
                }

                else if (command == "aboveall -persist") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll#persistent";
        
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
          
                }

                else if (command == "aboveall -science") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll#science";
        
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
          
                }

                else if (command == "aboveall -social") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll#socialengineering";
        
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
          
                }


                else if (command == "foul") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 CrowdStrikes Foul Play';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay"> <img src="CrowdStrikesFoulPlay.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> CrowdStrikes Foul Play 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay";
        
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
          
                }

                else if (command == "foul -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: foul -fault) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -fault</p> <p>🎃 -enduser</p> <p>🎃 -vendor</p> <p>🎃 -cs</p> 🎃 -cap</p> </p>'; 
                }

                else if (command == "foul -fault") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay#delta";
        
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
          
                }

                else if (command == "foul -enduser") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay#enduser";
        
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
          
                }

                else if (command == "foul -vendor") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay#vendor";
        
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
          
                }

                else if (command == "foul -cs") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay#crowdstrike";
        
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
          
                }

                else if (command == "foul -cap") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay#capitalize";
        
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
          
                }


                else if (command == "doc") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Documenting Your Journey ';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br>           <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney"> <img src="DocumentingYourJourney.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Documenting Your Journey 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney";
        
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
          
                }

                else if (command == "doc -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: doc -imp) in order to jump to a particular section anywhere on the site.</p> <p></p> 🎃 -imp </p> <p>🎃 -solve</p> <p>🎃 -soft</p> <p> </p>'; 
                }

                else if (command == "doc -imp") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney#memory";
        
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
          
                }

                else if (command == "doc -solve") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney#problems";
        
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
          
                }

                else if (command == "doc -soft") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney#skills";
        
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
          
                }



                else if (command == "best") //Come patch this later
                {   
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 Best Programming Languages For Cyber';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber"> <img src="BestProgrammingLanguagesForCyber.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Best Programming Languages For Cyber 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber";
        
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
                }

                else if (command == "best -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: best -python) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -python</p> <p>🎃 -cpp</p> <p>🎃 -math</p> </p>'; 
                }

                else if (command == "best -python") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber#python";
        
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
          
                }

                else if (command == "best -cpp") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber#cpp";
        
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
          
                }

                else if (command == "best -math") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber#math";
        
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
          
                }



                else if (command == "prog") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 More Training Programs';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TypesOfHackers"> <img src="TypesOfHackers.jpeg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Types Of Hackers 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms";
        
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
          
                }

                else if (command == "prog -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: prog -flaw) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -flaw</p> <p>🎃 -p1</p> <p>🎃 -p2</p> <p>🎃 -need</p> <p>🎃 -pick</p> </p>'; 
                }

                else if (command == "prog -flaw") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms#flaw";
        
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
          
                }

                else if (command == "prog -p1") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms#fix1";
        
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
          
                }

                else if (command == "prog -p2") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms#fix2";
        
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
          
                }

                else if (command == "prog -need") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms#neccessary";
        
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
          
                }

                else if (command == "prog -pick") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms#pickone";
        
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
          
                }


                else if (command == "create") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 How To Create Content';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/HowToCreateContent"> <img src="HowToCreateContent.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> How To Create Content 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToCreateContent";
        
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
          
                }

                else if (command == "create -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: content -theme) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -theme</p> <p>🎃 -website</p> <p>🎃 -orig</p> <p>🎃 -inspi</p> <p>🎃 -collab </p> </p>'; 
                }

                else if (command == "create -theme") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToCreateContent#theme";
        
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
          
                }

                else if (command == "create -website") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToCreateContent#website";
        
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
          
                }

                else if (command == "create -orig") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToCreateContent#original";
        
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
          
                }

                else if (command == "create -inspi") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToCreateContent#inspiration";
        
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
          
                }

                else if (command == "create -collab") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowToCreateContent#collab";
        
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
          
                }

                                
                else if (command == "claude") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 The Keyboard Injection FrameWork';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork"> <img src="TheKeyBoardInjectionFrameWork.jpg" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> The KeyBoard Injection FrameWork 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork";
        
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
          
                }

                else if (command == "claude -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: claude -threat) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -threat</p> <p>🎃 -ducky</p> <p>🎃 -need</p> </p>'; 
                }

                else if (command == "claude -threat") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork#threat";
        
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
          
                }

                else if (command == "claude -ducky") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork#rubberducky";
        
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
          
                }

                else if (command == "claude -need") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork#need";
        
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
          
                }



                else if (command == "wmtech") //Come patch this later
                {   
                    //This is where the intelisense logic takes place
                        //We need to convert one of the portfploo buttons into a line of html
                    
                    //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                    document.getElementById("testq").innerHTML = '🎃 How to Get More Women In Tech?';
                    document.getElementById("testp").innerHTML = '<p> Add "-options" to see all available commands </p> </br> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech"> <img src="HowtoGetMoreWomenInTech.png" class="img-responsive" alt="portfolio img" height = "400px"> <div class="portfolio-overlay"> <h4 style = "color: black;"> How to Get More Women In Tech 🕸🕸🎃🕸🕸</h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸</h5> </div> </a> </div> </div>';         
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech";
        
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
          
                }

                else if (command == "wmtech -options") //Come patch this later
                {   
                   
                    document.getElementById("testp").innerHTML = '<p>🕸🎃🕸 Options 🕸🎃🕸 </p> <p></p> <p>Run any of the following options (Ex: wmtech -origin) in order to jump to a particular section anywhere on the site.</p> <p></p> <p>🎃 -origin</p> <p>🎃 -more</p> <p>🎃 -brand</p> </p>'; 
                }

                else if (command == "wmtech -origin") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech#origin";
        
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
          
                }

                else if (command == "wmtech -more") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech#tech";
        
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
          
                }

                else if (command == "wmtech -brand") //Come patch this later
                {  
        
                    //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                    document.getElementById("submit").addEventListener('click', function(event)
                    {
                        //The event is going to trigger a test alert message on the page
        
                        //alert('working');
                        //document.getElementById("testq").innerHTML = '';
                        //document.getElementById("testp").innerHTML = ''; 
        
        
                        window.location.href = "https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech#purpose";
        
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
          
                }


            //General Commands
                 //(BUTTONS ON THE BANNERS)
        else if (command == "home")
            {   
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
      
            }

        else if (command == "service")
            {   
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
      
            }

            else if (command == "business card")
            {   
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
      
            }

            else if (command == "termux -f")
            {   
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
      
            }

            else if (command == "discord")
            {   
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
      
            }


            else if (command == "resume -d")
            {   
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
      
            }

            else if (command == "red city")
            {   
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
      
            }

            else if (command == "purple city")
            {   
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
      
            }

            else if (command == "linkedin")
            {   
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
      
            }


                  //(BUTTONS ON THE BANNERS)
        else if (command == "features")
            {   
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
      
            }

        else if (command == "articles")
            {   
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
      
            }

            else if (command == "projects")
            {   
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
      
            }

            else if (command == "termux -tour")
            {   
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
      
            }

            else if (command == "linkedin blogs")
            {   
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
      
            }

            else if (command == "rss feed")
            {   
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
      
            }

            else if (command == "github")
            {   
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
      
            }

            else if (command == "donate")
            {   
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
      
            }

            else if (command == "patreon")
            {   
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
      
            }

            else if (command == "business page")
                {   
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
          
                }

                else if (command == "resume -repo")
                    {   
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
              
                    }

                    else if (command == "catalog")
                        {   
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
                  
                        }


                else if (command == "catalog2")
                        {   
                            //This is where the intelisense logic takes place
                                //We need to convert one of the portfploo buttons into a line of html
                            
                            //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                            document.getElementById("testq").innerHTML = '🎃 Catalog';
                            document.getElementById("testp").innerHTML = '<div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/RCEBinaryInjection"> <img src="RCEBinaryInjection.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> RCE Binary Injection 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/BufferOverflow64bit"> <img src="BufferOverflow64bit.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Buffer Overflow 64 bit 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/DangerWAP"> <img src="DangerWAP.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Danger! WAP 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/DANGER_AI"> <img src="DANGER_AI.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> DANGER! A.I. 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/metasploit"> <img src="metasploit2.png" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Metasploit 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> </div> <div id = "portfolio" class = "col-md-4 col-xs-6 wow fadeIn section" data-wow-delay="0.6s"> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/DangerE2E"> <img src="DangerE2E.png" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Danger! E2E 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/HTTPRequestsMethods"> <img src="HTTPRequestsMethods.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> HTTP Requests Methods 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/DangerWindowsRecall"> <img src="DangerWindowsRecall.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Danger! Windows Recall 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/RemoteLocalFileInclusion"> <img src="RemoteLocalFileInclusion.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Remote Local File Inclusion 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/DangerRansomware"> <img src="DangerRansomware.png" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Danger! Ransomware 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> <div class="portfolio-thumb"> <a href="https://futabawebs.github.io/Futaba_Webs/CookieSessionHijacking"> <img src="CookieSessionHijacking.jpg" class="img-responsive" alt="portfolio img"> <div class="portfolio-overlay"> <h4 style = "color: black;"> Cookie Session Hijacking 🕸🕸🎃🕸🕸 </h4> <h5 style = "color: black;">- The Hacker Who Laughs 🕸🕸🎃🕸🕸 </h5> </div> </a> </div> </div>'; 
                
                
                            //Next, we're going to setup another event listener that's going to chain to see ifthe en duser clicks the submit button
                            document.getElementById("submit").addEventListener('click', function(event)
                            {
                                //The event is going to trigger a test alert message on the page
                
                                //alert('working');
                                //document.getElementById("testq").innerHTML = '';
                                //document.getElementById("testp").innerHTML = ''; 
                
                
                                window.location.href = "https://futabawebs.github.io/Futaba_Webs/PatreonCatalog#portfolio";
                
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
                  
                        }



                        else if (command == "help")
                            {   
                                //This is where the intelisense logic takes place
                                    //We need to convert one of the portfploo buttons into a line of html
                                
                                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                                document.getElementById("testq").innerHTML = '🕸🎃🕸 General Commands🕸🎃🕸';
                                document.getElementById("testp").innerHTML = "</br> 🎃 help -a -> Shows you all the Advanced Commands </br> </br> 🎃 service -> Shows you all the services I offer </br> </br> 🎃 business card -> Takes you to my business card </br> </br> 🎃 termux -f -> Brings you to terminal mode for the site </br> </br> 🎃 discord -> Brings you to my Discord server </br> </br> 🎃 resume -d -> Auto downloads a repo of my resume credentials </br> </br> 🎃 red city -> Takes you to a custom version of my site </br> </br> 🎃 purple city -> Takes you to a custom version of my site </br> </br> 🎃 linkedin -> Takes you to my LinkedIn page </br> </br> 🎃 features -> Takes you to all of my featured content </br> </br> 🎃 projects -> Takes you to my featured projects </br> </br> 🎃 articles -> Takes you to a custom version of my article catalog </br> </br> 🎃 terminal -tour -> Takes you to a video tour of Terminal Mode </br> </br> 🎃 linkedin blogs -> Takes you to my LinkedIn article catalog </br> </br> 🎃 rss feed -> Takes you to a feed of all my recent LinkedIn posts </br> </br> 🎃 github -> Takes you to my GitHub page </br> </br> 🎃 donate -> Takes you to my CasahApp (Donation Page) </br> </br> 🎃 patreon -> Takes you to my Patreon </br> </br> 🎃 business page -> Takes you to my business page </br> </br> 🎃 resume -repo -> Takes you to my Resume Repo"; 
                
                      
                            }

                        else if (command == "help -a")
                            {   
                                //This is where the intelisense logic takes place
                                    //We need to convert one of the portfploo buttons into a line of html
                                
                                //There needs to be a paragraph that will display a list of instructions for the said field. We'll insert that above the main field
                                document.getElementById("testq").innerHTML = '🕸🎃🕸 Advanced Commands🕸🎃🕸';
                                document.getElementById("testp").innerHTML = "<p></p> <p>🎃 help -> Shows you all the General Commands </br> </br> (Article Commands) 🕸🕸🎃🕸🕸 </br></br> Takes you to certain sections in an article </p> <p></p> <p>Run any of the following options (Ex: tcm -revoke) in order to jump to a particular section anywhere on the site.</p> <p></p> <p> </p> <p></p> <p> </br></br>(tcm) </p> <p>🎃 -revoke</p> <p>🎃 -stance</p> <p>🎃 -suspicions</p> <p>🎃 -lying</p> <p>🎃 -revised</p> <p>🎃 -truth</p> <p>🎃 -reliable</p> <p>🎃 -afterthoughts</p> <p></p> <p> </br></br>(brandp)</p> <p>🎃 -endgoal</p> <p>🎃 -authentic</p> <p>🎃 -gettingseen</p> <p>🎃 -community</p> <p>🎃 -capitalize</p> <p></p> <p> </br></br>(whm)</p> <p>🎃 -stacey</p> <p>🎃 -bailey</p> <p>🎃 -jennifer</p> <p>🎃 -angelina</p> <p>🎃 -lina</p> <p>🎃 -rana</p> <p>🎃 -nina</p> <p>🎃 -lena</p> <p>🎃 -carolina</p> <p>🎃 -ana</p> <p>🎃 -lexie</p> <p>🎃 -sandra</p> <p>🎃 -katie</p> <p>🎃 -laurie</p> <p>🎃 -grace</p> <p>🎃 -ell</p> <p>🎃 -lily</p> <p>🎃 -kazel</p> <p></p> <p> </br></br>(futabawhy)</p> <p>🎃 -background</p> <p>🎃 -insights</p> <p>🎃 -industry</p> <p>🎃 -outlook</p> <p></p> <p> </br></br>(resources)</p> <p>🎃 -enough</p> <p>🎃 -opportunities</p> <p>🎃 -options</p> <p></p> <p> </br></br>(exmachina)</p> <p>🎃 -exmachina</p> <p>🎃 -lexie</p> <p></p> <p> </br></br>(confluence)</p> <p>🎃 -confluence</p> <p>🎃 -cve</p> <p>🎃 -metasploit</p> <p>🎃 -mimikatz</p> <p>🎃 -pdq</p> <p>🎃 -anydesk</p> <p>🎃 -lockbit</p> <p>🎃 -ransomware</p> <p>🎃 -smb</p> <p>🎃 -rclone</p> <p></p> <p> </br></br>(confluence2)</p> <p>🎃 -attacktree</p> <p>🎃 -cve</p> <p>🎃 -shell</p> <p>🎃 -access</p> <p>🎃 -takeover5</p> <p>🎃 -rclone</p> <p>🎃 -lockbit</p> <p></p> <p> </br></br>(content)</p> <p>🎃 -danger</p> <p>🎃 -exploit</p> <p>🎃 -toolguides</p> <p>🎃 -programming</p> <p>🎃 -electrical</p> <p>🎃 -malwarelabs</p> <p>🎃 -securecoding</p> <p>🎃 -mrrobot</p> <p>🎃 -labs</p> <p>🎃 -audibles</p> <p></p> <p> </br></br>(vendor)</p> <p>🎃 -disclosure</p> <p>🎃 -example</p> <p></p> <p></p>"; 
                
                      
                            }

            //Intelisense
            else if (command == "")
            {
                document.getElementById("testq").innerHTML = '<h2>Futaba_Webs 🕸🕸🎃🕸🕸</h2> <p> Run the "Help" Command</p> <p> "Shift-Alt-P" (Opens Search Mode)</p> </br> <ul id="myUL" style = "list-style-type: none;"> <li><a href="https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Is TCM Security Still Credible? <img src="futaba 6.jpg" class="img-responsive" alt="portfolio img"></a></li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Build Your Personal Brand? <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025"style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Womens History Month 2025 <img src="kiki.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Why Futaba Does Cyber Security!? <img src="BatManWL.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Resource? OR Opportunities? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br>   <li><a href="https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Ex Machina Parlor <img src="ExMachinaParlor.jpeg" class="img-responsive" alt="portfolio img"></a> </li></br> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware <img src="confluence.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware (Part 2) <img src="rclone.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Futabas Cyber Security Content <img src="FutabasCyberSecurityContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted" style = "text-decoration: none; color: #D43F52; font-weight: bold;"> 🎃 Should 3rd Party Vendors Be Trusted? <img src="Should3rdPartyVendorsBeTrusted.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ArticleCatalog#portfolio" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Catalog Page <img src="Welcome Tier.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Goal Of Futaba_Webs <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img"></a> </li></br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Art of Code Analysis <img src="TheArtofCodeAnalysis.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlaw" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Cyber Securitys BIGGEST Flaw! <img src="CyberSecuritysBIGGESTFlaw.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br>  <li><a href="https://futabawebs.github.io/Futaba_Webs/TypesOfHackers" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Types Of Hackers <img src="TypesOfHackers.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Vs PAID Learning Which is Better? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/SubnettingForDummies" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Subnetting For Dummies <img src="subnettingdiagram.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Specialist VS Generalist? <img src="SpecialistVsGeneralist.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/BondBetweenTeacherAndStudent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Bond Between Teacher And Student <img src="BondBetweenTeacherAndStudent.avif" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/OOPForDummies" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 OOP For Dummies <img src="OOPForDummies.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Do Certs Still Matter? <img src="DoCertsStillMatter.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheEvilHERO" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Evil HERO <img src="TheEvilHERO.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheKernel" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Kernel <img src="TheKernel.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The One Above All <img src="TheOneAboveAll.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 CrowdStrikes Foul Play <img src="CrowdStrikesFoulPlay.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Documenting Your Journey <img src="DocumentingYourJourney.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Best Programming Languages For Cyber <img src="BestProgrammingLanguagesForCyber.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 More Training Programs <img src="MoreTrainingPrograms.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToCreateContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How To Create Content <img src="HowToCreateContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The KeyBoard Injection FrameWork <img src="TheKeyBoardInjectionFrameWork.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Get More Women In Tech <img src="HowtoGetMoreWomenInTech.png" class="img-responsive" alt="portfolio img"></a> </li> </br> </ul>';
       
            }     

            

            

    
    
    });