import React from 'react'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className="u-content-width">
                <div>i am a footer</div>
            </div>
        </div>
    )
}

export default Footer
