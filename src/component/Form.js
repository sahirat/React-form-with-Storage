import React,{ useState } from 'react';
import './Form.css';
const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alldata, setAllData] = useState([]);
    const submit = (e) => {
        e.preventDefault();
        const newData = { email: email, password: password };
        setAllData([...alldata, newData]);
        console.log(newData);
        console.log(alldata);
        
    }
    return (
        <>
        <div className="form">
                <form autocomplete="off" action=" " onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" name="email" placeholder="Email..."
                            value={email}
                            autocomplete="false"
                        onChange={(e) => {
                            setEmail(e.target.value);
                       }}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" placeholder="Password..." 
                            value={password}
                            autocomplete="false"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
            </div>
            <div>
                <h1> DataBase is Here !</h1>
                {
                    alldata.map((curr) => {
                        return (
                            <div className="showData">
                                <p>{curr.email}</p>
                                <p>{curr.password}</p>
                            </div>
                        )
                    })
                }
            </div>
            </>
    )
}

export default Form;
