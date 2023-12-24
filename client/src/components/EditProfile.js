import React, {useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TopNavigation from './TopNavigation';

function EditProfile() {

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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 let storeObject = useSelector((store)=>{
    return store
 });

 useEffect(()=>{
    populateData();
 },[])

 let populateData = () =>{

    if(storeObject.userDetails){
        fnameInputRef.current.value = storeObject.userDetails.firstName;
        lnameInputRef.current.value = storeObject.userDetails.lastName;
        phoneNumberInputRef.current.value = storeObject.userDetails.phone;
        emailInputRef.current.value = storeObject.userDetails.email;
        addressInputRef.current.value = storeObject.userDetails.address;
        birthdayInputRef.current.value = storeObject.userDetails.birthday;
        genderInputRef.current.value = storeObject.userDetails.gender;
        ageInputRef.current.value = storeObject.userDetails.age;
        interestsInputRef.current.value = storeObject.userDetails.interests;
        setProfilePreview(`http://localhost:2407/${storeObject.userDetails.profile}`);
        
    }
 }


    let updateProfile = async () => {

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


        let JSONData = await fetch("http://localhost:2407/updateProfile", reqOptions);
        let JSOData = await JSONData.json();

       console.log(JSOData);

    }

    let deleteAccount = async () => {

        let reqOptions = {

            method: "DELETE",

        }

        let url = `http://localhost:2407/deleteProfile?email=${storeObject.userDetails.email}`;

        let JSONData = await fetch(url,reqOptions);
        let JSOData = await JSONData.json();

        console.log(JSOData);

    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
  return (
    <div>
        <TopNavigation/>
        
        <h3 style={{color:"royalblue",position:"relative",top:"250px",left:"25px",fontSize:"x-large",fontFamily:"monospace",width:"350px"}}>update Your Profile ,Here-connectHub</h3>

        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <img id="profile" src={`http://localhost:2407/${storeObject.userDetails.profile}`} alt="Profile" onClick={handleDropdownToggle}/>
      {isDropdownOpen && (
        <div className='dropdown-content'>
          <Link to='/home'>Home</Link>
            <Link to='/'>Logout</Link>
        </div>
      )}
      </div>

{/* {loadingloader && <div className='loader3'>
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
</div>} */}
<form className="form2" style={{position:"relative",top:"20px"}}>
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
        <input className="input" type="email" placeholder="" required="" ref={emailInputRef} readOnly/>
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
            
    <button className="submit" type='button' onClick={()=>{updateProfile();}}>update Profile</button>
    <button className="submit" type='button' onClick={()=>{deleteAccount();}}>Delete Account</button>
    <p className="signin">Already have an acount ? <Link to='/'>Login</Link> </p>
</form>
    </div>
  )
}

export default EditProfile