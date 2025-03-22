'use client'

import { useState, useEffect } from 'react'

export default function Product() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setPosts(data)
      console.log(data)
    }
    fetchPosts()
  }, [])

  if (!posts) return <div>Loading...</div>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
