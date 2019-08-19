import React from 'react'

export default function StoriesList(props) {
  return (
    <div>
      <h4 style={{ borderTop: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>News Feed from Hacker News </h4>

      <ol>
        {props.loading ? "...Stories Loading" : props.list}
      </ol>
    </div>
  )
}
