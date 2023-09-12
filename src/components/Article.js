import React from 'react';

function Article({title, date="January 1, 1970", preview, minutes }) {

    let coffeeBar = "";
    const coffee = '☕️';
    const bento = '🍱';

    if (minutes < 30) {
        coffeeBar = coffee.repeat(Math.ceil(minutes / 5));
    } else {
        coffeeBar = bento.repeat(Math.ceil(minutes / 10));
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {coffeeBar} {minutes}{` min read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;