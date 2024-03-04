function About() {
    return (
        <>
        <div class="collapse bg-base-200">
        <input type="checkbox" class="peer" /> 
        <div class="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          Click me to show/hide content
        </div>
        <div class="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content"> 
          <p>hello</p>
        </div>
      </div>
        </>
    );
}

export default About;