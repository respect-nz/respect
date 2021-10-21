import React from 'react'

import styles from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className="u-content-width">
                <div>i am a header</div>
            </div>
        </div>
    )
}

export default Header
