import React from "react";
import { useRef, useState, useEffect } from "react";

const USER_REG = /^[a-zA-Z][a-zA-Z0-0-_]{3,23}$/;
const PWD_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    //user state related to user input
    const [user, setUser] = useState('');
    //state for name validation
    const [validName, setValidName] = useState(false);
    //state for focus on input field
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    return (
        <div>

        </div>
    )
}

export default Register