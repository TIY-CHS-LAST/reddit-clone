import React, { Component } from 'react'
import EmptyComponent from './EmptyComponent'
class Reddit extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { reddit } = this.props;
    console.log(this.props);
    return (

      <article className="mw9 center ph2-ns reddit bg-light-blue cf">
      {reddit ?
        <div>
        <section className="votes fl w-10 pa2">
          votes
        </section>
        <section className="thumb fl w-10 pa2">
          <img src={reddit.thumbnail && reddit.thumbnail !== "default" ? reddit.thumbnail : 'http://www.placecage.com/c/100/100'} />
        </section>
        <section className="content fl w-80 pa2">

          <p>
            {reddit.title}
          </p>
          <p>submitted {reddit.created} by {reddit.author}</p>
          <p>{reddit.num_comments} comments</p>
        </section>
        </div>
          : <EmptyComponent /> }
      </article>

    )
  }
}

export default Reddit;
