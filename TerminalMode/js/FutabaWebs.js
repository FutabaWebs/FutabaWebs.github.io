//This is going to contain all the programming logic ofr the slide show buttons on the page

//These are the mian global variables that will be defined as a pointer for the slide show pannel buttons to use to not overlap eachother while swapping the text fields.
var b1 = false; 
var b2 = true;
var b3 = true;


//These are for the main slide show buttons that are on the bottom of the images
function btn1()
{
    document.getElementById('textfield1').hidden = false;
    document.getElementById('textfield2').hidden = true;
    document.getElementById('textfield3').hidden = true;

    b1 = false;
    b2 = true;
    b3 = true;
   
}

function btn2()
{
    document.getElementById('textfield2').hidden = false;
    document.getElementById('textfield1').hidden = true;
    document.getElementById('textfield3').hidden = true;
   
    b1 = true
    b2 = false;
    b3 = true;
}

function btn3()
{
    document.getElementById('textfield3').hidden = false;
    document.getElementById('textfield1').hidden = true;
    document.getElementById('textfield2').hidden = true;
   
    b1 = true;
    b2 = true;
    b3 = false;
}

//These are for the main slide show pannels
function Next_Check() //If the end user hits the next icon
{
    if (b2 == true && b3 == true)
    {
        //Then we are going to toggle text field 2
        document.getElementById('textfield2').hidden = false;
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield3').hidden = true;

        b1 = true
        b2 = false;
        b3 = true;

        exit();

    }

    if (b1 == true && b3 == true)
    {
        //Then we are going to toggle text field 3
        document.getElementById('textfield3').hidden = false;
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield2').hidden = true;
        
        b1 = true;
        b2 = true;
        b3 = false;

        exit();
        
    }

    if (b1 == true && b2 == true)
    {
        //Then we are going to toggle text field 1
        document.getElementById('textfield1').hidden = false;
        document.getElementById('textfield2').hidden = true;
        document.getElementById('textfield3').hidden = true;

        b1 = false;
        b2 = true;
        b3 = true;

        exit();
        
    }
    

}

function Prev_Check() //If the end user hits the previous icon
{
    if (b2 == true && b3 == true)
    {   //Then we are going to toggle text field 2
        document.getElementById('textfield2').hidden = true;
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield3').hidden = false;

        b1 = true
        b2 = true;
        b3 = false;

        exit();

    }

    if (b1 == true && b3 == true)
    {
        //Then we are going to toggle text field 3
        document.getElementById('textfield3').hidden = true;
        document.getElementById('textfield1').hidden = false;
        document.getElementById('textfield2').hidden = true;
        
        b1 = false;
        b2 = true;
        b3 = true;

        exit();
        
    }

    if (b1 == true && b2 == true)
    {
        //Then we are going to toggle text field 1
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield2').hidden = false;
        document.getElementById('textfield3').hidden = true;

        b1 = true;
        b2 = false;
        b3 = true;

        exit();
        
    }
    

}

function testing()
{
    alert('Modal Opened');
    document.getElementById("testp").innerHTML = '<div class = "modal fade" id = "WordMode" style = "background-image: url('RedCity.gif');"> <div class = "modal-dialog modal-lg"> <div class = "modal-content"> <div class = "modal-header" style = "background-color: black; color: gray "> <span class="Contact_Icons mx-4"></span> <h3 class = "modal-title" style = "text-align: center; font-weight: bold;"> Word Version </h3> <button class = "btn-close bg-danger" data-bs-dismiss = "modal"> </button> </div> <div class = "modal-body"> <a href = "https://docs.google.com/document/d/1lGuP_h19VxtkKtJSfxdo_t5v6FFYkaar/edit?rtpof=true&sd=true" style = "text-decoration: none;"> <div class="d-grid"> <button type = "button" class = "btn btn-block" style = "background-color: black; font-weight: bold; color: gray; border-color: red;" > Click to Enlarge (Updated Copy) </button> </div> </a> <img class = "img-thumbnail mt-4 Modal_Pic_Generic" src = "WordVersion1.png" style = "border-color: red; background-color: black; width: 900px;"> </h3> <img class = "img-thumbnail mt-4 Modal_Pic_Generic" src = "WordVersion2.png" style = "border-color: red; background-color: black; width: 900px"> </h3> </br> </br> <a href = "https://docs.google.com/document/d/1lGuP_h19VxtkKtJSfxdo_t5v6FFYkaar/edit?rtpof=true&sd=true" style = "text-decoration: none;"> <div class="d-grid"> <button type = "button" class = "btn btn-block" style = "background-color: black; font-weight: bold; color: gray; border-color: red;" > Click to View More (Updated Copy) </button> </div> </a> </div> </div> </div> </div>';


}

//Loads the catalog list
function ModalLoad()
{    
    alert('Working');
    document.getElementById("testq").innerHTML = '<h2>Futaba_Webs 🕸🕸🎃🕸🕸</h2> <p> Run the "Help" Command</p> <p> "Shift-Alt-P" (Opens Search Mode)</p> </br> <ul id="myUL" style = "list-style-type: none;"> <li><a href="https://futabawebs.github.io/Futaba_Webs/Is_TCM_Still_Credible" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Is TCM Security Still Credible? <img src="futaba 6.jpg" class="img-responsive" alt="portfolio img"></a></li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToBuildYourPersonalBrand" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Build Your Personal Brand? <img src="futaba 5.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WomensHistoryMonth2025"style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Womens History Month 2025 <img src="kiki.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/WhyFutabaDoesCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Why Futaba Does Cyber Security!? <img src="BatManWL.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FreeResourcesOrOpportunities" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Resource? OR Opportunities? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br>   <li><a href="https://futabawebs.github.io/Futaba_Webs/ExMachinaParlor" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Ex Machina Parlor <img src="ExMachinaParlor.jpeg" class="img-responsive" alt="portfolio img"></a> </li></br> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart1" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware <img src="confluence.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ConfluenceRansomwarePart2" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Confluence LockBit Ransomware (Part 2) <img src="rclone.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FutabasCyberSecurityContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Futabas Cyber Security Content <img src="FutabasCyberSecurityContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/Should3rdPartyVendorsBeTrusted" style = "text-decoration: none; color: #D43F52; font-weight: bold;"> 🎃 Should 3rd Party Vendors Be Trusted? <img src="Should3rdPartyVendorsBeTrusted.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/ArticleCatalog#portfolio" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Catalog Page <img src="Welcome Tier.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheGoalOfFutabaWebs" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Goal Of Futaba_Webs <img src="TheGoalOfFutabaWebs.png" class="img-responsive" alt="portfolio img"></a> </li></br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheArtofCodeAnalysis" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Art of Code Analysis <img src="TheArtofCodeAnalysis.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/CyberSecuritysBIGGESTFlaw" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Cyber Securitys BIGGEST Flaw! <img src="CyberSecuritysBIGGESTFlaw.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br>  <li><a href="https://futabawebs.github.io/Futaba_Webs/TypesOfHackers" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Types Of Hackers <img src="TypesOfHackers.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/FREEVsPaidLearning" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 FREE Vs PAID Learning Which is Better? <img src="FreeResourcesOrOpportunities.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/SubnettingForDummies" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Subnetting For Dummies <img src="subnettingdiagram.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/SpecialistVsGeneralist" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Specialist VS Generalist? <img src="SpecialistVsGeneralist.jpeg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/BondBetweenTeacherAndStudent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Bond Between Teacher And Student <img src="BondBetweenTeacherAndStudent.avif" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/OOPForDummies" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 OOP For Dummies <img src="OOPForDummies.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/DoCertsStillMatter" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Do Certs Still Matter? <img src="DoCertsStillMatter.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheEvilHERO" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Evil HERO <img src="TheEvilHERO.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheKernel" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The Kernel <img src="TheKernel.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheOneAboveAll" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The One Above All <img src="TheOneAboveAll.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/CrowdStrikesFoulPlay" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 CrowdStrikes Foul Play <img src="CrowdStrikesFoulPlay.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/DocumentingYourJourney" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Documenting Your Journey <img src="DocumentingYourJourney.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/BestProgrammingLanguagesForCyber" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 Best Programming Languages For Cyber <img src="BestProgrammingLanguagesForCyber.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/MoreTrainingPrograms" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 More Training Programs <img src="MoreTrainingPrograms.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowToCreateContent" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How To Create Content <img src="HowToCreateContent.png" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/TheKeyBoardInjectionFrameWork" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 The KeyBoard Injection FrameWork <img src="TheKeyBoardInjectionFrameWork.jpg" class="img-responsive" alt="portfolio img"></a> </li> </br> <li><a href="https://futabawebs.github.io/Futaba_Webs/HowtoGetMoreWomenInTech" style = "text-decoration: none; color: #D43F52; font-weight: bold;">🎃 How to Get More Women In Tech <img src="HowtoGetMoreWomenInTech.png" class="img-responsive" alt="portfolio img"></a> </li> </br> </ul>';
}

//Closes the catalog list
function ModalUnload()
{    
    document.getElementById("testq").innerHTML = '';
}

//This is going to set an effect for if the modal opens
$('#WordMode').on('show.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    ModalLoad();
})

//This is going to set an effect for if the modal closes
$('#WordMode').on('hide.bs.modal', function (e) {
   
    //Calls the ModalLoad() function that loads all the elements to the page
    ModalUnload();
})