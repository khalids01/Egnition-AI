// assets/js/pages/Dashboard.jsx

import React from 'react'

interface Props {
  title: string
  message: string
}

export default function Dashboard({ title, message }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{message}</p>
    </div>
  )
}
