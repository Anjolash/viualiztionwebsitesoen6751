import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import default popup styles

function PopupWithTextbox() {
  const [finalDecision, setFinalDecision] = useState('');

  const handleChange = (event) => {
    setFinalDecision(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Final Decision:', finalDecision);
  };

  return (
    <Popup trigger={<button className='button final'>Final Decision</button>} modal>
      {(close) => (
        <div className="popup">
          <h2>Final Decision</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={finalDecision}
              onChange={handleChange}
              rows={4}
              cols={50}
              placeholder="Enter your final decision..."
            ></textarea>
            <div className="button-container">
              <button onClick={close}>Cancel</button>
              <button className='button final' type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </Popup>
  );
}

export default PopupWithTextbox;