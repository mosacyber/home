import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function SavePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>صفحة حفظ الشهادة</h1>
      <p>سيتم حفظ الشهادة هنا</p>
      <Link to="/" className="btn btn-primary">
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}

export default SavePage;
