import React from 'react'
const NewsItem=(props)=>{
    let { title ,description ,publishedAt ,newsUrl , imageUrl}= props;
        return (
            <div>
                <div className="card my-3">
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} class="card-img-top" alt="..." width="300px" height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,60)}...</h5>
                        <p className="card-text">{!description?'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper dui posuere lectus laoreet sc.':description.slice(0,100)}...</p>
                        <p class="card-text"><small class="text-muted">Published At {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
export default NewsItem
