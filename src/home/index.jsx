import React from "react";
import styles from './home.module.scss';
import { Link } from "react-router-dom";





export default function Home() {
    return (
        <div>
            <div className={styles.home}>
                <h1> Jardel baitola </h1>
            </div>
            <button> <Link to='/login'> HOME </Link>   </button>

        </div>


    )
}