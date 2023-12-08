import React, { useRef, useState, useEffect } from 'react';
import styles from '../../component/Login/Login.module.scss'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import image from '../../../src/assets/loginImage.png'


const LayoutCommon = () => {

    let { loginUser } = useSelector((state) => state.login);

    console.log('loginUser', loginUser)
    const inputRefs = Array(6).fill(null).map(() => useRef(null));
    const text = "Welcome Login Here";
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    return (
        <>
            <div className={styles.login}>
                <img src={image} alt="login_image" />
            </div>
        </>
    )
}

export default LayoutCommon