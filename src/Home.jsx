import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <>
      {/* Top Section */}
      <div className="top-section">
        <div className="top-left">
          <img src="/logo.png" alt="Logo" className="logo" />
          <h2>ادوات مساعدة</h2>
        </div>
        <div className="top-right">
          <p>نظام إدارة الشهادات التعليمية</p>
          <p>الإصدار 1.0</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>منصة الشهادات التعليمية</h1>
          <p>نظام إداري متكامل لإصدار وتوثيق الشهادات التعليمية</p>
        </div>

        <div className="buttons-container">
          <Link to="/save" className="btn btn-primary">
            <span className="btn-icon">📄</span>
            <span className="btn-text">إنشاء شهادة واحدة</span>
          </Link>

          <button className="btn btn-secondary">
            <span className="btn-icon">📚</span>
            <span className="btn-text">إنشاء شهادات متعددة</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3 className="feature-title">تصميم احترافي</h3>
          <p className="feature-description">
            شهادات بتصميم عصري وجذاب يعكس الاحترافية
          </p>
          <div className="feature-progress">
            <div className="progress-bar" style={{ width: '95%' }}></div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔐</div>
          <h3 className="feature-title">توثيق رقمي</h3>
          <p className="feature-description">
            نظام توثيق رقمي متقدم باستخدام تقنيات التشفير
          </p>
          <div className="feature-progress">
            <div className="progress-bar" style={{ width: '98%' }}></div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3 className="feature-title">تقارير ذكية</h3>
          <p className="feature-description">
            لوحة تحكم بتقارير تفاعلية ورسوم بيانية
          </p>
          <div className="feature-progress">
            <div className="progress-bar" style={{ width: '90%' }}></div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3 className="feature-title">أتمتة كاملة</h3>
          <p className="feature-description">
            إصدار الشهادات بشكل تلقائي وفوري
          </p>
          <div className="feature-progress">
            <div className="progress-bar" style={{ width: '97%' }}></div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3 className="feature-title">توافق متعدد</h3>
          <p className="feature-description">
            تصميم متجاوب يعمل على جميع الأجهزة
          </p>
          <div className="feature-progress">
            <div className="progress-bar" style={{ width: '99%' }}></div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3 className="feature-title">دعم متعدد اللغات</h3>
          <p className="feature-description">
            إمكانية إصدار الشهادات بلغات مختلفة
          </p>
          <div className="feature-progress">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <p>تم التطوير بواسطة: موسى بارقي</p>
        <p>جميع الحقوق محفوظة © 2023</p>
      </div>
    </>
  );
}

export default Home;
