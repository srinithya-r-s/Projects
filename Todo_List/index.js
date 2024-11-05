const input=document.getElementById("Input");
const list=document.getElementById("List");
const button=document.getElementById("Button");

// button.addEventListener('click',function(){})
//ul creation in js
function addData()
{
    const dataInput=input.value.trim();
    console.log(dataInput)
    if(dataInput)
    {
        const li=document.createElement("li");
        const span=document.createElement("span");
        const deleteButton=document.createElement("button");
        const ul=document.createElement("ul");


        span.textContent=dataInput;
        deleteButton.textContent="Delete";
        deleteButton.className="delete";
        //  ul.className="unorder";
        //  li.className="lst";
        
         

        li.appendChild(span);
        li.appendChild(deleteButton);

        // ul.appendChild(li);
        list.appendChild(li);

        input.value='';//textcontent

        deleteButton.addEventListener("click",function()
    {
        list.removeChild(li);
        // ul.removeChild(li);
    });

       li.addEventListener("click",function()
{
    li.classList.toggle("completed");
});


    }
}

button.addEventListener("click",addData)
