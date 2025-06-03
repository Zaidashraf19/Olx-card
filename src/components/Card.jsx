import React, { useEffect } from 'react';
const Card = (props) => {
    return (
        <div style={styles.card}>
            <img
                src={props.image}
                alt="Product"
                style={styles.image}
            />
            <h3 className="font-bold mt-2">{props.title}</h3>
            <p className='truncate'>{props.description}</p>
            <button style={styles.button}>Purchase <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    );
};
export default Card

// Styles for the card
const styles = {
    card: {
        width: '260px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    button: {
        border: '1px solid black',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    }
};