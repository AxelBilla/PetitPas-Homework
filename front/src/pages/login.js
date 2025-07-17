import '../App.css';

export default function Login() {
  return (
    <div className='sign-menu' id='sign-login'> 
      <div className='sign-menu-title'>
        <h1 className='f-iconic no-select'>Login</h1>
      </div>
      <div className='sign-menu-fields'>
        <form id='login-form' className='sign-menu-fields-form'>
          <input type='email' name='email' placeholder='EMAIL' id='login-field-email' className='sign-menu-fields-form-text f-idendidad' required /> 
          <input type='text' name='text' placeholder='NAME' id='login-field-name' className='sign-menu-fields-form-text f-idendidad' required />
          <input type='submit' value='LOGIN' id='login-btn' className='sign-menu-fields-form-submit f-iconic' onClick={loginSubmit}/>
        </form>
      </div>
    </div>
  );
}

async function loginSubmit(e){
    e.preventDefault();

    let form_email = e.target.form[0].value;
    let form_name = e.target.form[1].value;

    const req = await fetch("http://54.37.69.170:999/login",{
      method: "POST",
      body: JSON.stringify({email: form_email, name: form_name}),
      headers: {"Content-Type": "application/json"} 
    });
    const res = await req.json();

    if(res.status){
        window.location = "/home"
        localStorage.setItem("email", form_email)
    }
  }
