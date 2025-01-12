import React from 'react';
import styles from './AdminLogin.module.css';

import LoginForm from './LoginForm';


function AdminLogin() {
  return (
    <div className={styles.adminLogin}>
     
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b942daac0bf962d9cb8f68874afbc2afd7c6751c173c64ed33421faa794eaea6?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Admin login illustration" className={styles.loginImage} />
          <LoginForm />
        </div>
      </main>
     
    </div>
  );
}

export default AdminLogin;