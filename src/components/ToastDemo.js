import React from 'react';
import { 
  showSuccessToast, 
  showErrorToast,
  showInfoToast,
  showWarningToast,
  showPromiseToast
} from '../utils/toast';

const simulateAPICall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = Math.random() > 0.3;
      if (shouldSucceed) {
        resolve('API call succeeded!');
      } else {
        reject(new Error('API call failed!'));
      }
    }, 1500);
  });
};

const ToastDemo = () => {
  const handleAPICall = () => {
    showPromiseToast(
      simulateAPICall(),
      {
        pending: 'Making API call...',
        success: 'Data loaded successfully!',
        error: 'Failed to load data'
      }
    );
  };

  return (
    <div className="toast-demo">
      <h2>Toast Notification Demo</h2>
      <p>Click buttons to trigger different toast notifications</p>
      
      <div className="button-group">
        <button 
          onClick={() => showSuccessToast('Operation completed successfully!')}
          className="btn btn-success"
        >
          Success Toast
        </button>
        
        <button 
          onClick={() => showErrorToast('Something went wrong!')}
          className="btn btn-error"
        >
          Error Toast
        </button>
        
        <button 
          onClick={() => showInfoToast('Here is some information')}
          className="btn btn-info"
        >
          Info Toast
        </button>
        
        <button 
          onClick={() => showWarningToast('This is a warning message')}
          className="btn btn-warning"
        >
          Warning Toast
        </button>
        
        <button 
          onClick={handleAPICall}
          className="btn"
          style={{ backgroundColor: '#9c27b0', color: 'white' }}
        >
          Simulate API Call
        </button>
      </div>
    </div>
  );
};

export default ToastDemo;