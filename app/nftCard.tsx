'use client';
import { useState } from 'react';
//import 추가!!

export function NFTCardComponent() {
  
  const maxTokenId = 50;
  const [currentTokenId, setCurrentTokenId] = useState(1);
  
  const prevCard = () => {
    setCurrentTokenId((prevId) => 
      prevId === 1 ? maxTokenId : prevId - 1
    );
  };
  const nextCard = () => {
    setCurrentTokenId((prevId) => 
      prevId === maxTokenId ? 1 : prevId + 1
    );
  };
  
  return (
    <div style={styles.sliderContainer}>
      <button 
        onClick={prevCard} 
        style={styles.arrowButton}
        className="arrow-button"
        aria-label="이전 NFT"
      >
        &#8249; 
      </button>
      
      <div style={styles.cardBackground}>
        <div style={styles.tokenIdIndicator}>
          Token ID: {currentTokenId} / {maxTokenId}
        </div>
        
        <div style={styles.cardWrapper}>
          <div style={styles.cardContainer}>
            {/* 여기에 NFT 카드 컴포넌트를 추가하세요!!!! */}

          </div>
          
          <div style={styles.pagination}>
            {maxTokenId <= 10 ? (
              Array.from({ length: maxTokenId }, (_, i) => i + 1).map((id) => (
                <span 
                  key={id} 
                  style={{
                    ...styles.dot,
                    ...(id === currentTokenId ? styles.activeDot : {})
                  }}
                  onClick={() => setCurrentTokenId(id)}
                />
              ))
            ) : (
              <>
                <span 
                  key="first" 
                  style={{
                    ...styles.dot,
                    ...(currentTokenId === 1 ? styles.activeDot : {})
                  }}
                  onClick={() => setCurrentTokenId(1)}
                />
                
                {currentTokenId > 5 && <span style={styles.dots}>...</span>}
                
                {Array.from(
                  { length: Math.min(5, maxTokenId - 2) },
                  (_, i) => {
                    const startId = Math.max(2, Math.min(currentTokenId - 2, maxTokenId - 5));
                    return startId + i;
                  }
                ).map((id) => (
                  <span 
                    key={id} 
                    style={{
                      ...styles.dot,
                      ...(id === currentTokenId ? styles.activeDot : {})
                    }}
                    onClick={() => setCurrentTokenId(id)}
                  />
                ))}
                {currentTokenId < maxTokenId - 4 && <span style={styles.dots}>...</span>}
                {maxTokenId > 1 && (
                  <span 
                    key="last" 
                    style={{
                      ...styles.dot,
                      ...(currentTokenId === maxTokenId ? styles.activeDot : {})
                    }}
                    onClick={() => setCurrentTokenId(maxTokenId)}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      <button 
        onClick={nextCard} 
        style={styles.arrowButton}
        className="arrow-button"
        aria-label="다음 NFT"
      >
        &#8250;
      </button>

      
      <style jsx>{`
        .arrow-button {
          transition: all 0.2s ease;
        }
        
        .arrow-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}


const styles = {
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '20px',
  },
  
  cardBackground: {
    backgroundColor: 'rgba(25, 31, 52, 0.7)',
    borderRadius: '16px',
    padding: '30px 20px 15px',
    width: '80%',
    maxWidth: '500px',
    position: 'relative',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cardContainer: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  tokenIdIndicator: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  arrowButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    gap: '8px',
    width: '100%',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  activeDot: {
    backgroundColor: 'white',
    transform: 'scale(1.2)',
    boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
  },
  dots: {
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: '2px',
    fontSize: '14px',
  }
};
