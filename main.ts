document.addEventListener("DOMContentLoaded", ()=>{
    function validateForm (){
        const form = document.getElementById("resumeform") as HTMLFormElement;
        if(!form.checkValidity()){
            alert("Please fill all required field correctly.")
            return false;
        }
        return true;
    }

    function generateResume(){
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value; 
        const skills = (document.getElementById("skills") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const picture = (document.getElementById("picture") as HTMLInputElement).files?.[0];

        // populate resume 
        (document.getElementById("displayName")as HTMLElement).innerText = name;
        (document.getElementById("displayEmail")as HTMLElement).innerText = email;
        (document.getElementById("displayPhone")as HTMLElement).innerText = phone;
        (document.getElementById("displayAddress")as HTMLElement).innerText = address;
        (document.getElementById("displaySkills")as HTMLElement).innerText = skills;
        (document.getElementById("displayEducation")as HTMLElement).innerText = education;
        (document.getElementById("displayExperience")as HTMLElement).innerText = experience;


        if(picture){
            const reader = new FileReader();
            reader.onload = function (e){
                (document.getElementById("displayPicture") as HTMLImageElement).src = e.target?.result as string;
            };
            reader.readAsDataURL(picture);
        };
    };
        document.getElementById("resumeform")?.addEventListener("submit",function(event){
            event.preventDefault();
            if(validateForm()){
                generateResume()
            }
        })


        // Generate Resume

        document.getElementById("name")?.addEventListener("input", generateResume);
        document.getElementById("picture")?.addEventListener("input", generateResume);
        document.getElementById("email")?.addEventListener("input", generateResume);
        document.getElementById("address")?.addEventListener("input", generateResume);
        document.getElementById("phone")?.addEventListener("input", generateResume);
        document.getElementById("skills")?.addEventListener("input", generateResume);
        document.getElementById("education")?.addEventListener("input", generateResume);
        document.getElementById("experience")?.addEventListener("input", generateResume);
   

        const workExperience = document.getElementById("workExperience");
        const workSkills = document.getElementById("workSkills");
        const workEducation = document.getElementById("workEducation");
        
        workExperience?.addEventListener("input",(event)=>{
            const updateExperience = (event.target as HTMLElement).innerText;
            console.log(updateExperience);
            
        });


        workSkills?.addEventListener("input",(event)=>{
            const updateSkills = (event.target as HTMLElement).innerText;
            console.log(updateSkills);
            
        });

        workEducation?.addEventListener("input",(event)=>{
            const updateEducation = (event.target as HTMLElement).innerText;
            console.log(updateEducation);
            
        });
})


const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement
shareableLink?.addEventListener("click",()=>{

})

const downloadPdf = document.getElementById("downloadpdf") as HTMLButtonElement
downloadPdf?.addEventListener("click",()=>{
    window.print()
})