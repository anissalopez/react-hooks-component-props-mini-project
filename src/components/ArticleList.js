import React from "react";
import Article from "./Article"

function ArticleList({posts}){
   



   const articles = posts.map((post) => {
    return <Article title = {post.title} preview = {post.preview} date = {post.date} minutes = {post.minutes}  />
    
   
})
   
   
    return (
        <main>
            {articles}
        </main>
       
    )
}

export default ArticleList;