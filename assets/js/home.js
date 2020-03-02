// taking all checkboxs
var checkboxs=document.querySelectorAll("#delete1 #task input");
//taking all taskDescription
var taskDescpt=document.getElementsByClassName("task-des");
//taking all taskDates
var taskDate=document.getElementsByClassName("task-date");

for(let i=0;i<checkboxs.length;i++)
{
    checkboxs[i].addEventListener("click",function()
    {   //if checkbox is checked then add linethrough to taskDescription and taskDates
        if(checkboxs[i].checked)
        {
            taskDescpt[i].classList.add("linethrough");
            taskDate[i].classList.add("linethrough");
        }//else remove the linethrough
        else
        {
            taskDescpt[i].classList.remove("linethrough");
            taskDate[i].classList.remove("linethrough");
        }
    })
    
}