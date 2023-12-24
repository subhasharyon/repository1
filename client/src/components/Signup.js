import React, {useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {

    let fnameInputRef = useRef();
    let lnameInputRef = useRef();
    let phoneNumberInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let cpasswordInputRef = useRef();
    let addressInputRef = useRef();
    let birthdayInputRef = useRef();
    let genderInputRef = useRef();
    let ProfileInputRef = useRef();
    let ageInputRef = useRef();
    let interestsInputRef = useRef();


    const [profilePreview, setProfilePreview] = useState("./images/preview3.png");
    const [loadingloader, setLoadingLoader] = useState(false);

    let insertData = async () => {

        let dataTOSend = new FormData();

        dataTOSend.append("firstName", fnameInputRef.current.value);
        dataTOSend.append("lastName",lnameInputRef.current.value);
        dataTOSend.append("phone",phoneNumberInputRef.current.value);
        dataTOSend.append("email",emailInputRef.current.value);
        dataTOSend.append("password",passwordInputRef.current.value);
        dataTOSend.append("confirmPassword",cpasswordInputRef.current.value);
        dataTOSend.append("address",addressInputRef.current.value);
        dataTOSend.append("birthday",birthdayInputRef.current.value);
        dataTOSend.append("gender",genderInputRef.current.value);
        dataTOSend.append("age",ageInputRef.current.value);
        dataTOSend.append("interests",interestsInputRef.current.value);

        for(let i=0; i<ProfileInputRef.current.files.length; i++){
            dataTOSend.append("profile", ProfileInputRef.current.files[i]);
        };

        let reqOptions = {

            method: "POST",
            body: dataTOSend,
        }

        setLoadingLoader(true);

        let JSONData = await fetch("http://localhost:2407/userDetails", reqOptions);
        let JSOData = await JSONData.json();

        alert(JSOData.msg);
       

        setTimeout(() => {
            console.log(JSOData);
            setLoadingLoader(false);
        },1000);

    }
  return (
    <div>
         {/* <form>
            <div>
                <input placeholder='First Name' ref={fnameInputRef}></input>
                <input placeholder='Last Name' ref={lnameInputRef}></input>
            </div>
            <div>
                <input placeholder='Phone Number' ref={phoneNumberInputRef}></input>
            </div>
            <div>
                <input placeholder='Email' ref={emailInputRef}></input>
            </div>
            <input placeholder='Password' ref={passwordInputRef}></input>
            <div>
                <input placeholder='Confirm Password' ref={cpasswordInputRef}></input>
            </div>
            <div>
                <textarea placeholder='Address' ref={addressInputRef}></textarea>
            </div>
            <div>
                <label>Birthday</label>
                <input type='datetime-local' ref={birthdayInputRef}></input>
            </div>
            <div>
                <label>Gender</label>
                <select ref={genderInputRef}>
                    <option>Select Sex</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label>Age</label>
           <input ref={ageInputRef}></input>
            </div>
            <div>
                <label>Interests</label>
                <input ref={interestsInputRef}></input>
            </div>
            <div>
                <label>Set Profile</label>
                <input type='file' multiple ref={ProfileInputRef} onChange={() => {
                    let selectedImageURL = URL.createObjectURL(ProfileInputRef.current.files[0]);

                    setProfilePreview(selectedImageURL);
                }}></input>
            </div>
            
                <img src={profilePreview}  className='profilepic'></img>
            

            <button className='signupbtn' type='button' onClick={()=>{insertData();}}>Signup</button> 
           
               <Link to='/'><button className='lgnbtn'>Login</button></Link>  
        </form> */}

        <h3 style={{color:"royalblue",position:"relative",top:"200px",left:"25px",fontSize:"x-large",fontFamily:"monospace",width:"350px"}}>Sign up for love, laughter, and a happily ever after. Your match is waiting!-ConnectHub</h3>

{loadingloader && <div className='loader3'>
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
</div>}
<form className="form2">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input className="input" type="text" placeholder="" required="" ref={fnameInputRef}/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required="" ref={lnameInputRef}/>
            <span>Lastname</span>
        </label>
    </div>  
    <div>
        <label>PhoneNumber</label>
                <input ref={phoneNumberInputRef}></input>
            </div>
<div>
<label> Email</label> 
        <input className="input" type="email" placeholder="" required="" ref={emailInputRef}/>
</div>
       
   
<div>
            
<label> Password</label>
        <input className="input" type="password" placeholder="" required="" ref={passwordInputRef}/>
</div>

   <div>
   <label>Confirm Password</label>
        <input className="input" type="password" placeholder="" required="" ref={cpasswordInputRef}/>
   </div>

    
    <div>
        <label>Address</label>
                <textarea ref={addressInputRef}></textarea>
            </div>
            <div>
                <label>Birthday</label>
                <input type='datetime-local' ref={birthdayInputRef}></input>
            </div>
            <div>
                <label>Gender</label>
                <select ref={genderInputRef}>
                    <option>Select Sex</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label>Age</label>
           <input ref={ageInputRef}></input>
            </div>
            <div>
                <label>Interests</label>
                <input ref={interestsInputRef}></input>
            </div>
            <div>
                <label>Set Profile</label>
                <input type='file' multiple ref={ProfileInputRef} onChange={() => {
                    let selectedImageURL = URL.createObjectURL(ProfileInputRef.current.files[0]);

                    setProfilePreview(selectedImageURL);
                }}></input>
            </div>
            
                <img src={profilePreview}  className='profilepic'></img>
            
    <button className="submit" type='button' onClick={()=>{insertData();}}>Submit</button>
    <p className="signin">Already have an acount ? <Link to='/'>Login</Link> </p>
</form>
    </div>
  )
}

export default Signup