import React,{useState} from 'react'
import './form.css'
import Button from 'react-bootstrap/Button';
function Form() {
  const initial={
    name: '',
    email: '',
    age: '',
    education:'',
    insititute:'',
    course:'',
    experience:'',
    college:'',
    program:'',
    country:'',
    goals:'',
    listening:'',
    reading:'',
    speaking:'',
    writing:'',
    tuition:'',
    pay:'',
    gic:'',
    gic_pay:''
  }
    const [formData, setFormData] = useState(initial);
 const clearState=()=>{
  setFormData(initial);
}
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    console.log(formData);
    fetch('/sopGenerator', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
    }).then((resp) => {
      resp.json().then((res) => {
        console.log(res);
        if(res.status===200){
        alert(res.message);
        clearState();
        }
        else{
          alert(res.message);
        }
      })
      
    })
    

  };
  return (
    <div className='container'>
      <div className='subcontainer'>
      <form onSubmit={handleSubmit}>
      <div className='main'>
       <h1>EFFIZIENT</h1> 
      </div>
      <div className='description'>
        <h3>Customized SOP Generator</h3>
        <p>Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs. </p>
        <p>If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us:<a href="https://effizient-immigration-inc.square.site/s/shop">https://effizient-immigration-inc.square.site/s/shop</a></p>

          <p id="content"><a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdOHGp-XNvu2p06oSWY7Mtv0R81GxHH2XGaPa1gKdIXAL6msw%2Fviewform%3Ffbzx%3D-5825721359210467421&ifkv=AXo7B7UrFlvHb0Sl945GHmQkTvf0XDzw1PDHxjTjwbuKf9z0tSUdjgle5-FgoJQ1-4cdPH1SjuIXvg&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1375241646%3A1693592323965154&theme=glif">Sign in to Google</a><span>to save your progress.</span><a href="https://docs.google.com/forms/d/e/1FAIpQLSdOHGp-XNvu2p06oSWY7Mtv0R81GxHH2XGaPa1gKdIXAL6msw/viewform"> Learn more</a></p>
        
        <p style={{color:"red"}}>* Indicates required question</p>
      </div>
      <div className='data'>
        <label className='required'>
          Email
          </label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Your answer'
            required
          />
        
      </div>
      <div className='data'>
      <label className='required'>
          Full Name
      </label>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Your answer'
            required
          />
      </div>
      <div className='data'>
      <label className='required'>
          Age:
      </label>
        <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder='Your answer'
            required
          />
      </div>
      <div className='data'>
        <label for="education" className='required'>Highest Level of Education</label>
          <select name="education" id="list" value={formData.education} onChange={handleInputChange} required>
            <option value="choose">Choose</option>
            <option value="Grade 12">Grade 12</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelors Degree">Bachelors Degree</option>
            <option value="Masters Degree">Masters Degree</option>
            <option value="PhD">PhD</option>
          </select>
      </div>
      <div className='data'>
        <label className='required'>Institute where you completed your highest level of education</label>
        <input type="text" name="institute" value={formData.institute}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <label className='required'>What did you study</label>
        <input type="text" name="course" value={formData.course}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
        <label>
          <h6 className='required'>Do you have any relevant work experience?</h6>
          <p>Write None if no work experience. Provide the following details if yes:</p>
          <ol type='1'>
            <li>Job Title </li>
            <li>Company Name</li>
            <li>Job duties</li>
          </ol>
          <p>Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.</p>
          </label>
          <input type="text" name="experience" value={formData.experience}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'> 
        <label className='required'>What institute did you get admitted to in Canada?</label>
        <input type="text" name="college" value={formData.college}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <label className='required'>What is your program of study in Canada?</label>
        <input type="text" name="program" value={formData.program}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <label className='required'>Which country are you applying from?</label>
        <input type="text" name="country" value={formData.country}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <label className='required'>What are your future goals?</label>
        <input type="text" name="goals" value={formData.goals}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/> 
      </div>
      <div className='data'>
      <label className='required'>English Scores - Listening</label>
        <input type="text" name="listening" value={formData.listening}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/> 
      </div>
      <div className='data'>
      <label className='required'>English Scores - Reading</label>
        <input type="text" name="reading" value={formData.reading}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <label className='required'>English Scores - Speaking</label>
        <input type="text" name="speaking" value={formData.speaking}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <label className='required'>English Scores - Writing</label>
        <input type="text" name="writing" value={formData.writing}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <p className='required'>Did you pay your first year tuition?</p>
      <input type="radio" id="pay" name="tuition" value={formData.tuition} onChange={handleInputChange}
            required/>
      <label>Yes</label><br/>
      <input type="radio" id="pay" name="tuition" value={formData.tuition} onChange={handleInputChange}
            required/>
      <label>No</label>
      </div>
      <div className='data'>
      <label className='required'>How much tuition fee did you pay?</label>
        <input type="text" name="pay" value={formData.pay}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='data'>
      <label className='required'>Did you do a GIC?</label><br/>
      <input type="radio" id="pay" name="gic" value="formData.gic" onChange={handleInputChange}/>
      <label>Yes</label><br/>
      <input type="radio" id="pay" name="gic" value="formData.gic"onChange={handleInputChange}/>
      <label>No</label>
      </div>
      <div className='data'>
      <label className='required'>How much did you pay towards GIC?</label>
      <input type="text" name="gic_pay" value={formData.gic_pay}
            onChange={handleInputChange}
            placeholder='Your answer'
            required/>
      </div>
      <div className='btn' style={{display:"flex", alignItems:"flex-start"}}>
        <div style={{flex:1}}>
        <Button variant="primary" type="submit">Submit</Button>
        </div>
      <div style={{flex:1}}>
      <input type='range' min='0' max='1'/>
      </div>
      <div style={{flex:1}}>
        <a href="#" onClick={clearState}>clear form</a>
      </div>
      
      </div>
      </form>
    </div>
    </div>
  )
}

export default Form
