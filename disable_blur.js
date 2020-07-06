
// disables blur by changing class name to null

var item=document.body.getElementsByClassName("blur");

for(var i=item.length-1;i>=0;i--)
{
  item[i].className = "";
}


//enables paste 
var allowPaste = function(e){
    e.stopImmediatePropagation();
    return true;
  };
document.addEventListener('paste', allowPaste, true);