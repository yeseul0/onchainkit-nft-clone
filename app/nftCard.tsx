'use client';

import { useState } from 'react';
import { NFTCard } from '@coinbase/onchainkit/nft';
import {
  NFTLastSoldPrice,
  NFTMedia,
  NFTNetwork,
  NFTOwner,
  NFTTitle,
} from '@coinbase/onchainkit/nft/view';

export default function NFTCardComponent() {
  // 컨트랙트 주소는 고정
  const contractAddress = "0xF8B75c6080B9A74Fb7C5E4C8D24f5deA2f8Fe082";
  
  // 토큰 ID 범위 설정 (1부터 50까지)
  const maxTokenId = 50;
  
  // 현재 표시 중인 토큰 ID (1부터 시작)
  const [currentTokenId, setCurrentTokenId] = useState(1);
  
  // 이전 카드로 이동
  const prevCard = () => {
    setCurrentTokenId((prevId) => 
      prevId === 1 ? maxTokenId : prevId - 1
    );
  };
  
  // 다음 카드로 이동
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
        &#8249; {/* 왼쪽 화살표 */}
      </button>
      
      {/* 전체 카드 배경 컨테이너 */}
      <div style={styles.cardBackground}>
        {/* Token ID 표시 */}
        <div style={styles.tokenIdIndicator}>
          Token ID: {currentTokenId} / {maxTokenId}
        </div>
        
        <div style={styles.cardWrapper}>
          {/* NFT 카드 컴포넌트를 고정 크기 컨테이너로 감싸기 */}
          <div style={styles.cardContainer}>
            <NFTCard
              contractAddress={contractAddress}
              tokenId={currentTokenId.toString()}
            >
              <NFTMedia square={true} /> {/* square를 true로 변경 */}
              <NFTTitle />
              <NFTOwner />
              <NFTLastSoldPrice />
              <NFTNetwork />
            </NFTCard>
          </div>
          
          {/* 페이지네이션 점들 */}
          <div style={styles.pagination}>
            {maxTokenId <= 10 ? (
              // 토큰이 10개 이하면 모두 표시
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
              // 토큰이 10개 초과면 현재 인덱스 주변과 처음/끝 표시
              <>
                {/* 첫 번째 도트 */}
                <span 
                  key="first" 
                  style={{
                    ...styles.dot,
                    ...(currentTokenId === 1 ? styles.activeDot : {})
                  }}
                  onClick={() => setCurrentTokenId(1)}
                />
                
                {/* 현재 토큰 ID가 5보다 크면 ... 표시 */}
                {currentTokenId > 5 && <span style={styles.dots}>...</span>}
                
                {/* 현재 토큰 ID 주변 5개 도트 */}
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
                
                {/* 현재 토큰 ID가 마지막에서 5개 이상 떨어져 있으면 ... 표시 */}
                {currentTokenId < maxTokenId - 4 && <span style={styles.dots}>...</span>}
                
                {/* 마지막 도트 */}
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
        &#8250; {/* 오른쪽 화살표 */}
      </button>

      {/* 호버 효과를 위한 CSS */}
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

// 슬라이더 관련 스타일
const styles = {
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '20px',
  },
  // 새로 추가: 전체 카드 배경 컨테이너
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
