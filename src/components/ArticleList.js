import React from 'react';
import Article from './Article.js';

function ArticleList({posts}) {
    const postsJSX = posts.map(post => {
        return <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} key={post.id} />
    })
    
    return  (
        <main>
            {postsJSX}
        </main>
    )
}

export default ArticleList;