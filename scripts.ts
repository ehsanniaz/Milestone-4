const form = document.getElementById('Resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// handle form submission 

form.addEventListener('submit', (event : Event) => {
    event.preventDefault() // prevent page reload

    // collect values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const Email = (document.getElementById('Email') as HTMLInputElement).value
    const fname = (document.getElementById('Father-name') as HTMLInputElement).value
    const Phone = (document.getElementById('Phone') as HTMLInputElement).value
    const edication = (document.getElementById('Education') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value 

    // generate the resume content dynamically 

    const resumeContent = `
    <h2><b> Editable Resume</b></h2>
   <h3>Personal Information </h>
   <p><b> Name : </b><span contenteditable = "true"> ${name} </span></p>
   <p><b> Email : </b> <span contenteditable = "true">${Email} </span></p>
   <p><b> Father's Name : </b><span contenteditable = "true"> ${fname} </span></p>
   <p><b> Phone : </b> <span contenteditable = "true"> ${Phone} </span></p>
   <hr>
   <h3>Education</h3>
   <p contenteditable = "true">${edication}</p>
   <hr>
   <h3>Skills</h3>
   <p contenteditable = "true">${skills}</p>
   <hr>
   <h3>Experience</h3>
   <p contenteditable = "true">${experience}</p>
   <hr>
   <h3>Certifications</h3>
   <p contenteditable = "true">${certifications}</p>
    `;
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeContent;
    } else {
        console.error('resume-display element not found');
    }
})