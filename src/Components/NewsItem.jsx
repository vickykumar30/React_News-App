import React from 'react'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-4 text-center my-2 py-2 px-2" style={{ maxWidth: "345px" }}>
      <img src={src} style={{ height: "200px", width: "320px", overflow: 'hidden' }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News upcoming Latest Breaking News, Pictures, Videos, and Special Reports from The Economic Times. upcoming Blogs, Comments and Archive News on ..."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
