import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "../../component/Login/Login.module.scss";
import LayoutCommon from './LayoutCommon';

const EnterLayout = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className='row'>
                    <div className='col-6'>
                        <LayoutCommon />
                    </div>
                    <div className='col-6'>
                        <div className={styles.logins}>
                            <div className={styles.loginDiv}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnterLayout