import React from 'react'
import styles from './ProductDetail.module.css';

const ProductDetail = ({modal, closeModal, data}) => {
    return (
        <div className={modal ? `${styles.modal} ${styles.modalNV}`: `${styles.modal} ${styles.modalV}` }>
                <div className={styles.modalContainer}>
                    <header className={styles.headerModal}>{data.title}</header>
                    <label className={styles.labelModal} onClick={closeModal}>X</label>
                    <div className={styles.contenido}>
                        <div  className={styles.imgContainer}><img className={styles.img} src={data.img} alt={"img"}></img></div>
                        <div className={styles.information}>
                            {/* <span className={styles.title}>{data.title}</span> */}
                            <span className={styles.description}>Descripción del Producto: {data.description}</span>
                            <span className={styles.price}>Precio: ${data.price}</span>
                        </div>
                    </div>
                </div>
             </div>
    )
}

export default ProductDetail