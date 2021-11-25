//Firebase Config********************************

//Register.js *************************************
const register = async () => {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }

}

//Register.js*********************************
<h1>Register</h1>
            <input type="text"
                placeholder="E-Mail"
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }} />

            <input type="text"
                placeholder="Password"
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}
            />
            <Button variant="primary" onClick={register}>Register</Button>

// App.js *****************************************
<Router>
    <Routes>

        <Route path="components/Login.js" element={<Login />} />
        <Route path="components/Register.js" element={<Register />} />
        <Route path="components/Mail.js" element={<Mail />} />
        <Route path="components/New_password.js" element={<New_password />} />

    </Routes>
    <div cmssName="w-100 text-center mt-2">
        Möchten Sie sich registrieren? <Link to="components/Register.js">Registrieren</Link>
    </div>

    <div className="w-100 text-center mt-2">
        Sie haben bereits ein Konto? <Link to="components/Login.js">Einloggen</Link>
    </div>

    <div className="w-100 text-center mt-2">
        Registrierung per Mail  <Link to="components/Mail.js">Per Mail</Link>
    </div>

    <div className="w-100 text-center mt-2">
        Neues Passwort  <Link to="components/New_password.js">Neu</Link>
    </div>

</Router>



