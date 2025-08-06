'use client';
//import 추가!! 

export default function App() {
  const links = [
    {
      title: 'Base Onchainkit Docs',
      description: '온체인킷 개발 문서',
      url: 'https://docs.base.org/onchainkit/getting-started',
    },
    {
      title: 'NFT Metadata Generator',
      description: '내 NFT 이미지 제출',
      url: 'https://nft-metadata-generator.vercel.app',
    },
    {
      title: 'Client API Key 발급',
      description: 'Coinbase 개발자 포털',
      url: 'https://portal.cdp.coinbase.com',
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.walletContainer}>
            {/* 지갑 컴포넌트 렌더링 */}
          </div>
        </div>
      </header>
      <main style={styles.main}>
        <div style={styles.leftSection}>
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-button" 
              style={styles.linkButton}
            >
              <h3 style={styles.linkTitle}>{link.title}</h3>
              <p style={styles.linkDescription}>{link.description}</p>
            </a>
          ))}
        </div>
        <div style={styles.rightSection}>
          {/* NFTCardComponent 렌더링!!!!! */}

        </div>
      </main>
      <footer style={styles.footer}>
        <div style={styles.logoContainer}>
          <div className="logo-wrapper" style={styles.logoWrapper}>
            <img src="/base.svg" alt="Base" style={styles.logoImage} />
          </div>
          <div className="logo-wrapper" style={styles.logoWrapper}>
            <img src="/bay.svg" alt="Bay" style={styles.logoImage} />
          </div>
          <div className="logo-wrapper" style={styles.logoWrapper}>
            <img src="/elizaOS.svg" alt="ElizaOS" style={styles.logoImage} />
          </div>
          <div className="logo-wrapper" style={styles.logoWrapper}>
            <img src="/mintclub.svg" alt="Mintclub" style={styles.logoImage} />
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .link-button {
          transition: all 0.3s ease;
        }
        
        .link-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(83, 56, 201, 0.6);
          background-color: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .logo-wrapper {
          transition: all 0.3s ease;
        }
        
        .logo-wrapper:hover {
          transform: translateY(-3px);
          filter: brightness(1.2);
        }
      `}</style>
    </div>
  );
}

// 스타일 객체
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    color: 'white',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', // 그라데이션 배경색
  },
  header: {
    paddingTop: '16px',
    paddingRight: '16px',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  walletContainer: {
    
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: '24px',
    gap: '32px',
  },
  leftSection: {
    width: '40%', 
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    justifyContent: 'center',
  },
  rightSection: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 12px rgba(83, 56, 201, 0.4)', 
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
    maxWidth: '400px', 
    margin: '0 auto',
  },
  linkTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
  },
  linkDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    margin: 0,
  },
  footer: {
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px', 
    width: '80%',
    maxWidth: '800px',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  logoImage: {
    height: '40px',
    width: 'auto',
  }
};
