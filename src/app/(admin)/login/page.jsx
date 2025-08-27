
  "use client";
  import { useState } from "react";
  import { useRouter } from 'next/navigation';
  import styles from "./login.module.css";
  
  const AdminLogin = () =>{ 

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handalLogin = async (e) =>{ 
    //     e.preventDefault();
    //     if(!email || !password) return;
    //     console.log({
    //       email,
    //       password
    //     })
    //     setEmail("");
    //     setPassword("");
    // } 
  const handalLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push('/dashboard'); // redirect to admin page
      } else {
        setErrorMsg(data.message || 'Login failed');
      }
    } catch (err) {
      setErrorMsg('Something went wrong');
      console.error(err);
    }

    setEmail('');
    setPassword('');
  };


    return(
        <>
          <section>
                <div className={`main_container tectureBg purpleBg ${styles.fixed_height} overflow-hidden`}>
                      <div className={`row ${styles.fixed_height}`}>
                          <div className="col-md-5 tectureBg purpleBg h-100 d-flex justify-content-center align-items-center">
                              <img
                                src="/logo/footer-logo.png"
                                alt="login icon"
                                style={{width:'100%', maxWidth:'200px'}}
                              />
                          </div>
                           <div className={`col-md-7 h-100 ${styles.login_containers}`}>
                                <div className={`w-100 corporateBg h-100 d-flex justify-content-center align-items-center ${styles.login_containers2}`}>
                                      <div className={`purpleBg tectureBg ${styles.form_card}`}>
                                        <div className="text-primaryBeige">
                                            <p className={`mb-2 ${styles.welcomeBack}`}>Welcome Back!</p>
                                            <p style={{fontSize:'14px'}}>Please enter log in details below</p>
                                        </div>
                                          <form onSubmit={handalLogin}> 
                                              <div className={` ${styles.input_container}`}>
                                                  <label className="form-label text-primaryBeige mb-1">Email</label>
                                                  <input 
                                                    type="email" 
                                                    className="form-control purpleColor"
                                                    placeholder="name@site.com"
                                                    required
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    value={email}
                                                    ></input>
                                                  
                                              </div>

                                              <div className={` ${styles.input_container}`}>
                                                  <label className="form-label text-primaryBeige mb-1">Password</label>
                                                  <input 
                                                      type="password"
                                                      className="form-control purpleColor "
                                                      placeholder="Password"
                                                      required
                                                      onChange={(e) => setPassword(e.target.value)}
                                                      value={password}
                                                      ></input>
                                                   
                                              </div> 
                                              <button className={`w-100  ${styles.submit_button}`} type="submit">Login</button>
                                          </form>
                                      </div>
                                </div>
                                  
                          </div>
                      </div>
                </div>
          </section>
        </>
    )
}

export default AdminLogin;