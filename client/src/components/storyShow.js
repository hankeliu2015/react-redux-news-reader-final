import React from 'react';
import Card from 'react-bootstrap/Card'

export default function StoryShow(props) {

  if (props.story.time) {
    let storyTime = new Date(props.story.time * 1000);
    let timeString = storyTime.toLocaleString();

    return (
      <Card body>
        <Card.Header>{props.story.title}</Card.Header>
        <Card.Text>{props.story.text}</Card.Text>
        <Card.Footer>Published at: {timeString}</Card.Footer>
      </Card>
    )
  } else {
    let timeString = "Time is not available";

    return (
      <div>
        <h4>{props.story.title}</h4>
        <p>{props.story.text}</p>
        <p>Time: {timeString}</p>
      </div>
    )
  }
}
