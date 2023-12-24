import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Login() {

    let loginemailRef = useRef();
    let loginPasswordRef = useRef();

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    let validateLogin = async () => {
      setIsLoading(true); 
  
      let validate = new FormData();
      validate.append('email', loginemailRef.current.value);
      validate.append('password', loginPasswordRef.current.value);
  
      let reqOptions = {
        method: 'POST',
        body: validate,
      };
  
      try {
        let JSONData = await fetch('http://localhost:2407/validateUser', reqOptions);
        let JSOData = await JSONData.json();
  
        console.log(JSOData);
  
        if (JSOData.status === 'success') {
          setTimeout(() => {
            setIsLoading(false); 
            navigate('/home');
            dispatch({ type: 'login', data: JSOData.data });
          }, 2000);
        } else {
          setIsLoading(false);
          alert(JSOData.msg);
        }
      } catch (error) {
        setIsLoading(false); 
        console.error('Error during login:', error);
      }
    };
  return (
    <div>
        {/* <div className='loginForm'>
            <form>
                <div>
                    <input ref={loginemailRef} placeholder='Email'></input>
                </div>
                <div>
                    <input ref={loginPasswordRef} placeholder='Password'></input>
                </div>
                <div>
                    <button type='button' className='login-btn' onClick={()=>{validateLogin();}}>Login</button>
                </div>
                <Link to='/signup'><button className='signup-btn'>Signup</button></Link>
            </form>
        </div> */}
        <h4 style={{color:"#9ee5e3",position:"relative",top:"200px",left:"150px",
        fontFamily:"fantasy",fontSize:"xx-large",fontWeight:"bolder"
      }}>Connecthub🫂</h4>
        <div id="Container">
  <form class="form">
    <div id="login-lable">Login</div>
    <input class="form-content" type="text" placeholder="UserName" ref={loginemailRef}/>
    <input class="form-content" type="password" placeholder="PassWord" ref={loginPasswordRef}/>
    <button type='button' onClick={()=>{validateLogin();}}>Continue</button>
    {isLoading &&<div>
<div class="box-of-star1">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div class="box-of-star2">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div class="box-of-star3">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div class="box-of-star4">
    <div class="star star-position1"></div>
    <div class="star star-position2"></div>
    <div class="star star-position3"></div>
    <div class="star star-position4"></div>
    <div class="star star-position5"></div>
    <div class="star star-position6"></div>
    <div class="star star-position7"></div>
  </div>
  <div data-js="astro" class="astronaut">
    <div class="head"></div>
    <div class="arm arm-left"></div>
    <div class="arm arm-right"></div>
    <div class="body">
      <div class="panel"></div>
    </div>
    <div class="leg leg-left"></div>
    <div class="leg leg-right"></div>
    <div class="schoolbag"></div>
  </div>
  </div>}
    <p>Don't have an account?<Link to='/signup' id='signuplink'>Signup</Link></p>
  </form>

  <div id="rays">
    <svg
      fill="none"
      viewBox="0 0 299 152"
      height="9em"
      width="18em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#paint0_linear_8_3)"
        d="M149.5 152H133.42L9.53674e-07 4.70132e-06H149.5L299 4.70132e-06L165.58 152H149.5Z"
      ></path>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="12.1981"
          x2="150.12"
          y1="152"
          x1="149.5"
          id="paint0_linear_8_3"
        >
          <stop stop-color="#00E0FF"></stop>
          <stop stop-opacity="0" stop-color="#65EDFF" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>

  <div id="emiter">
    <svg
      fill="none"
      viewBox="0 0 160 61"
      height="61"
      width="160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_1_38)">
        <path
          fill="#2B2B2B"
          d="M80 27.9997C121.974 27.9997 156 22.4032 156 15.4996L156 40.4998C156 47.4034 121.974 52.9998 80 52.9998C38.0265 52.9998 4.00028 47.4034 4 40.4998V40.4998V15.51C4.0342 22.4089 38.0474 27.9997 80 27.9997Z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </g>
      <ellipse
        fill="url(#paint0_radial_1_38)"
        ry="4.80773"
        rx="28.3956"
        cy="17.4236"
        cx="80"
      ></ellipse>
      <g filter="url(#filter1_i_1_38)">
        <path
          fill="#323232"
          d="M80 28.0002C121.974 28.0002 156 22.4037 156 15.5001C156 8.59648 121.974 3 80 3C38.0264 3 4 8.59648 4 15.5001C4 22.4037 38.0264 28.0002 80 28.0002ZM80.0001 20.308C96.1438 20.308 109.231 18.1555 109.231 15.5002C109.231 12.845 96.1438 10.6925 80.0001 10.6925C63.8564 10.6925 50.7693 12.845 50.7693 15.5002C50.7693 18.1555 63.8564 20.308 80.0001 20.308Z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </g>
      <g filter="url(#filter2_di_1_38)">
        <path
          fill="#378BA6"
          d="M106.725 17.4505C108.336 16.8543 109.231 16.1943 109.231 15.4999C109.231 12.8446 96.1438 10.6921 80.0001 10.6921C63.8564 10.6921 50.7693 12.8446 50.7693 15.4999C50.7693 16.1943 51.6645 16.8543 53.2752 17.4504C53.275 17.4414 53.2748 17.4323 53.2748 17.4232C53.2748 14.768 65.2401 12.6155 80.0001 12.6155C94.7601 12.6155 106.725 14.768 106.725 17.4232C106.725 17.4323 106.725 17.4414 106.725 17.4505Z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="45.5002"
          width="160"
          y="15.4996"
          x="0"
          id="filter0_di_1_38"
        >
          <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
          <feColorMatrix
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            type="matrix"
            in="SourceAlpha"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite operator="out" in2="hardAlpha"></feComposite>
          <feColorMatrix
            values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.25 0"
            type="matrix"
          ></feColorMatrix>
          <feBlend
            result="effect1_dropShadow_1_38"
            in2="BackgroundImageFix"
            mode="normal"
          ></feBlend>
          <feBlend
            result="shape"
            in2="effect1_dropShadow_1_38"
            in="SourceGraphic"
            mode="normal"
          ></feBlend>
          <feColorMatrix
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            type="matrix"
            in="SourceAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="8"></feGaussianBlur>
          <feComposite
            k3="1"
            k2="-1"
            operator="arithmetic"
            in2="hardAlpha"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            type="matrix"
          ></feColorMatrix>
          <feBlend
            result="effect2_innerShadow_1_38"
            in2="shape"
            mode="normal"
          ></feBlend>
        </filter>
        <filter
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="25.0002"
          width="152"
          y="3"
          x="4"
          id="filter1_i_1_38"
        >
          <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
          <feBlend
            result="shape"
            in2="BackgroundImageFix"
            in="SourceGraphic"
            mode="normal"
          ></feBlend>
          <feColorMatrix
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            type="matrix"
            in="SourceAlpha"
          ></feColorMatrix>
          <feMorphology
            result="effect1_innerShadow_1_38"
            in="SourceAlpha"
            operator="erode"
            radius="3"
          ></feMorphology>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="6.5"></feGaussianBlur>
          <feComposite
            k3="1"
            k2="-1"
            operator="arithmetic"
            in2="hardAlpha"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            type="matrix"
          ></feColorMatrix>
          <feBlend
            result="effect1_innerShadow_1_38"
            in2="shape"
            mode="normal"
          ></feBlend>
        </filter>
        <filter
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="26.7583"
          width="78.4615"
          y="0.692139"
          x="40.7693"
          id="filter2_di_1_38"
        >
          <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
          <feColorMatrix
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            type="matrix"
            in="SourceAlpha"
          ></feColorMatrix>
          <feMorphology
            result="effect1_dropShadow_1_38"
            in="SourceAlpha"
            operator="dilate"
            radius="2"
          ></feMorphology>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feComposite operator="out" in2="hardAlpha"></feComposite>
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0.941176 0 0 0 0 1 0 0 0 1 0"
            type="matrix"
          ></feColorMatrix>
          <feBlend
            result="effect1_dropShadow_1_38"
            in2="BackgroundImageFix"
            mode="color-dodge"
          ></feBlend>
          <feBlend
            result="shape"
            in2="effect1_dropShadow_1_38"
            in="SourceGraphic"
            mode="normal"
          ></feBlend>
          <feColorMatrix
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            type="matrix"
            in="SourceAlpha"
          ></feColorMatrix>
          <feMorphology
            result="effect2_innerShadow_1_38"
            in="SourceAlpha"
            operator="erode"
            radius="1"
          ></feMorphology>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            k3="1"
            k2="-1"
            operator="arithmetic"
            in2="hardAlpha"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0"
            type="matrix"
          ></feColorMatrix>
          <feBlend
            result="effect2_innerShadow_1_38"
            in2="shape"
            mode="normal"
          ></feBlend>
        </filter>
        <radialGradient
          gradientTransform="translate(80 17.4236) rotate(90) scale(6.25004 36.9143)"
          gradientUnits="userSpaceOnUse"
          r="1"
          cy="0"
          cx="0"
          id="paint0_radial_1_38"
        >
          <stop stop-color="#00FFF0"></stop>
          <stop stop-color="#001AFF" offset="0.901042"></stop>
        </radialGradient>
      </defs>
    </svg>
  </div>
</div>

    </div>
  )
}

export default Login