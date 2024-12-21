// Event delegation is a phenomena by which we can reduce the number of event handlers
// Instead of applying events on each child, we should apply event on parent only and whenever any child will get clicked then
// through event propagation the parent event will be triggered and we would be able to manage all the childs through singlt evebt
// We can identify which element get triggered using e.target.id

// --> Benefits
// it saves a lot of memory
// we need to write the less code
// DOM manipulation

// --> Limitations
// all the events are not bubbled up like Blur, focus - so we need to manage separately
// if we used event.stopPropagation then it will not work, so it should not be used


const parentDiv = document.querySelector("#category");

if(parentDiv){
    parentDiv.addEventListener("click",(e)=>{
       console.log(e.target);
       console.log(e.target.id) // it will give us the id of the list item which get's clicked

       window.location.href= "/"+e.target.id
    })
}