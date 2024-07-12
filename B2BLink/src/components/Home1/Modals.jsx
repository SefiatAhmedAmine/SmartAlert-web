import React, { useState } from 'react';
import SelectComponent from '@/src/utils/SelectComponent';
import { useAuth } from '@/src/contexts/AuthContext';

function Modals() {
    const { login, signup } = useAuth();

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstName') setFirstName(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
    };
    
    const handleSignupSubmit = async (e) => {
      e.preventDefault();
      console.log(firstName, email, password, confirmPassword);
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      try {
        await signup({ firstName, email, password });
        alert('Signup successful');
      } catch (error) {
        alert('Signup failed: ' + error.message);
      } 
    };
    
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setLoginEmail(value);
        if (name === 'password') setLoginPassword(value);
    };

    
    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      try {
          console.log('Login attempt:', loginEmail, loginPassword);
          const response = await login(loginEmail, loginPassword);
          console.log('Login successful:', response);
          alert('Login successful');
      } catch (error) { 
          console.error('Login failed:', error.response ? error.response.data : error.message);
          alert('Login failed: ' + (error.response ? error.response.data : error.message));
      }     
  };
  

  return (
    <>
    <div className='z-3'>
        <div className="modal signUp-modal fade z-3" id="signUpModal01" tabIndex={-1} aria-labelledby="signUpModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title" id="signUpModal01Label">S'Inscrire</h4>
                <p>Vous avez deja un compte? <button type="button" data-bs-toggle="modal" data-bs-target="#logInModal01">Log In</button></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSignupSubmit}>
                    <div className="row g-4">
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>Nom*</label>
                        <input type="text" placeholder='Nom' name="firstName" id="firstName" value={firstName} onChange={handleSignupChange} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <label>Entrer votre address mail*</label>
                        <input type="email" placeholder="Entrer l'addresse email" name="email" id="email" value={email} onChange={handleSignupChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner"> 
                        <label>Mot de passe*</label>
                        <input id="password" type="password" placeholder="*** ***" name="password" value={password} onChange={handleSignupChange} />
                        <i className="bi bi-eye-slash" id="togglePassword" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner">
                        <label>Confirmer votre mot de passe*</label>
                        <input id="password2" type="password" placeholder="*** ***"  name="confirmPassword" value={confirmPassword} onChange={handleSignupChange} />
                        <i className="bi bi-eye-slash" id="togglePassword2" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit" onClick={handleSignupSubmit}>CREER UN COMPTE</button>
                        </div>
                    </div>
                    </div>
                    <div className="terms-conditon">
                    <p>En vous inscrivant,vous acceptez les<a href="#">termes &amp; conditons</a></p>
                    </div>
                    <ul className="social-icon">
                    <li><a href="#"><img src="assets/img/home1/icon/google.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/twiter.svg" alt="" /></a></li>
                    </ul>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="modal signUp-modal fade z-3" id="logInModal01" tabIndex={-1} aria-labelledby="logInModal01Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="logInModal01Label">Se Connecter</h4>
                  <p>Vous n'avez pas de compte? <button type="button" data-bs-toggle="modal" data-bs-target="#signUpModal01">Créer un Compte</button></p>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleLoginSubmit}>
                    <div className="row g-4">
                    <div className="col-md-12">
                        <div className="form-inner">
                        <label>Entrer votre addresse mail*</label>
                        <input type="email" placeholder="Entrer l'addresse mail" name='email' value={loginEmail} onChange={handleLoginChange} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner"> 
                        <label>Mot de passe*</label>
                        <input id="password3" type="password" placeholder="*** ***" name='password' value={loginPassword} onChange={handleLoginChange} />
                        <i className="bi bi-eye-slash" id="togglePassword3" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                            <input type="checkbox" id="html" />
                            <label htmlFor="html">Se Souvenir de moi</label>
                        </div>
                        <a href="#" className="forgot-pass">Mot de passe oublié?</a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                        <button className="primary-btn2" type="submit">Se Connecter</button>
                        </div>
                    </div>
                    </div>
                    <div className="terms-conditon">
                    <p>En vous inscrivant, vous accepter les <a href="#">termes &amp; conditons</a></p>
                    </div>
                    <ul className="social-icon">
                    <li><a href="#"><img src="assets/img/home1/icon/google.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img src="assets/img/home1/icon/twiter.svg" alt="" /></a></li>
                    </ul>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modals
