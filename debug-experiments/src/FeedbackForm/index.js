import React from 'react';
import { clearText } from '../utils/textCensor';

import './index.css'

const resultTexts = {
  success: 'Your news submitted. Thank you!',
  error: 'Oops, something went wrong. Please, try again later',
};

export default class FeedbackForm extends React.Component {
  state = {
    text: '',
    postResult: null,
  };

  onChange = (event) => {
    this.setState({
      text: clearText(event.currentTarget.value),
    });
  };

  onSubmit = (e) => {
    const textarea = e.currentTarget['feedback-textarea'];
    const content = textarea.value;

    e.preventDefault();

    fetch('/suggest-news', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          postResult: data.success ? 'success' : 'error',
        });
      })
      .catch(() => {
        this.setState({
          postResult: 'error',
        });
      });
  };

  render() {
    const { text, postResult } = this.state;

    return (
      <section className="feedback-form">
        {postResult && (
          <div className={`feedback-result ${postResult}`}>
            {resultTexts[postResult]}
          </div>
        )}
        {postResult !== 'success' && (
          <form
            onSubmit={this.onSubmit}
          >
            <textarea
              placeholder="Suggest hot news!"
              className="feedback-textarea"
              id="feedback-textarea"
              value={text}
              onChange={this.onChange}
            />
            <button disabled={!text}>
              Submit
            </button>
          </form>
        )}
      </section>
    );
  }
}
