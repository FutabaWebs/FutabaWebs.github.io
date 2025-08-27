<!DOCTYPE HTML>  
<?php //Hadnles main login informaiton and processes it to the mysql server database backend, along with cookie generation and handling

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    #This variable is going to define
    $search = $_SERVER['search']; 

    //Next we're going to check if the value of our search matches, and if it does, we'll be redirected to the TCM article
    if ($search == "TCM" || $search = "tcm")
    {
                        //If the cookie is present on authentication check then we are going to have the user redirected to the php page
                        header('Location: https://google.com'); #This is goign tor efresh the page in order to set the cookie value 
                    
                        die();
    }
}

?>
