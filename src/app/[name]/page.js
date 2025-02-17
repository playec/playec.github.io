import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
    const markdown = "**Hightlast**"
    return (
    <div>
      <div>
            <ReactMarkdown>
              {markdown}
            </ReactMarkdown>
        </div>
    </div>
  )
}