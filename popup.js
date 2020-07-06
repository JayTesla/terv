
//on click button
// let blur = document.getElementById('enable');

// blur.onclick = function(element) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//            {file:'disable_blur.js'});
           
//     });
//     };
//Load the script without clicking
document.addEventListener('DOMContentLoaded', function() {

    // onClick's logic below:
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                     tabs[0].id,
                    {file:'disable_blur.js'});
                   
            });
  
    });


//Reference
//{code: 'document.body.style.backgroundColor ="' + color +'";'});
//code: 'document.body.getElementsByClassName("blur")[1].className ="";'