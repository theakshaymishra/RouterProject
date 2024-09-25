import React from 'react'

const GitHubInfoLoader = async() => {
 const response = await fetch('https://api.github.com/users/theakshaymishra')
 return response.json()
}

export default GitHubInfoLoader
