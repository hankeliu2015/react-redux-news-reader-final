import React from 'react'

export default function StoryShow(props) {
  return (
    <div>
      <h4>{props.story.title}</h4>
      <p>{props.story.text}</p>
      <p>Date: {props.story.time}</p>
    </div>
  )
}
