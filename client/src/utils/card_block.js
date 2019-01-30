import React, { Component } from 'react';

const CardBlock = (props) => {

    const renderCard = () => (
        props.list?
            props.list.map((card, i) => (
                <div>
                    card
                </div>
            ))
        :null
    )

    return (
        <div className='card_block'>
            <div className='container'>
                {
                    props.tile?
                        <div className='title'>
                            {props.title}
                        </div>
                    :null
                }
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {renderCard(props.list)}
                </div>
            </div>
        </div>
    );
}

export default CardBlock;