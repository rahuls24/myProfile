import React from 'react';
import './bootstrap.min.css';
export default function Footer() {
  return (
    <footer>
      <div className='footer-block'></div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 pt-2 mx-auto text-center bg-dark test-light'>
            <h6 style={{ color: '#fff' }}>Copyright &copy; Rahul Kumar 2019</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
