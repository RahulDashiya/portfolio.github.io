const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () 
    {
       for(let j=0; j<totalNavList; j++)
         {
             navList[j].querySelector("a").classList.remove("active");
         }
        
       this.classList.add("active")
      showSelection(this);
    } )
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click",() => 
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}
