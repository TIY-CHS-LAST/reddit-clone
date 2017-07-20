import React, { Component } from 'react'
import Reddit from './Reddit'

class RedditList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reddits: []
    }
  }
  async componentWillMount() {
    const redditData = await fetch('https://www.reddit.com/r/todayilearned.json')
      .then(data => data.json())
      .catch(err => console.log(err))
      console.log('data from reddit', redditData.data.children);
      const reddits = redditData.data.children.map(items => {
        return items.data
      })
      console.log(reddits);

      this.setState({reddits})
  }

  render() {
    return (
      <section>
    {  this.state.reddits && this.state.reddits.map(reddit => {
        return <Reddit reddit={reddit} />
      })}
      </section>
    )
  }
}

export default RedditList;
