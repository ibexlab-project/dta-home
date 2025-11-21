# 디자인 분석 및 이미지 요구사항

## 1. 구현 플랜 검증 결과

### ✅ 이미 구현된 컴포넌트
- `Header.tsx` - 기본 구조 있음 (내용 수정 필요)
- `Footer.tsx` - 기본 구조 있음 (내용 수정 필요)
- `HeroSection.tsx` - 기본 구조 있음 (내용 수정 필요)
- `InfrastructureSection.tsx` - 기본 구조 있음 (내용 수정 필요)
- `MarketFocusSection.tsx` - 기본 구조 있음 (내용 수정 필요)
- `RoadmapSection.tsx` - 기본 구조 있음 (내용 수정 필요)
- `TechArchitectureSection.tsx` - 기본 구조 있음 (내용 수정 필요)
- `PartnerNetworkSection.tsx` - 기본 구조 있음 (내용 수정 필요)

### ❌ 추가로 필요한 컴포넌트
- `MediaRoomSection.tsx` - **신규 생성 필요**
- `BottomCTASection.tsx` - **신규 생성 필요**
- `ThaiPremiumTourismSection.tsx` - **신규 생성 필요** (MarketFocusSection과는 별도)

---

## 2. 섹션별 상세 분석

### 2.1 Header (컴포넌트로 구현)

**현재 상태**: 기본 구조 있음

**수정 필요 사항**:
- 로고: "DTA." (텍스트로 구현 가능, 또는 이미지 필요)
- 네비게이션 링크: "Overview", "Ecosystem", "Technology", "Roadmap", "Partners", "Media"
- 언어 선택기: "EN"
- "Launch App" 버튼

**이미지 필요 여부**: 
- ❌ 로고는 텍스트로 구현 가능 (또는 SVG 로고 이미지 1개)

---

### 2.2 Hero Section (컴포넌트로 구현)

**현재 상태**: 기본 구조 있음

**수정 필요 사항**:
- 배경: 파란색 그라데이션 (CSS로 구현)
- 태그: "Blockchain-Powered Tourism Platform" (컴포넌트)
- 헤드라인: "Digital Assets, Real-World Privileges" (컴포넌트)
- 설명 텍스트: "DTA Digital Tourism Alliance connects..." (컴포넌트)
- CTA 버튼: "Explore Ecosystem", "Partner with Us" (컴포넌트)
- 메트릭 카드: "28M+", "B1.2T", "50+" (컴포넌트)

**이미지 필요 여부**: 
- ❌ 모두 컴포넌트로 구현 가능

---

### 2.3 Three-Layer Infrastructure Section (컴포넌트로 구현)

**현재 상태**: 기본 구조 있음 (내용 다름)

**수정 필요 사항**:
- 제목: "Three-Layer Infrastructure"
- 부제목: "A comprehensive blockchain ecosystem..."
- 3개 카드 (가로 배치):
  - **중앙**: "DTA" - "the ecosystem's Operator and Legal Steward" (아이콘: 문서 모양)
  - **왼쪽**: "SiMX" (Smart Widget & Membership Experience) - "DTA's Premium B2C Membership Platform"
  - **오른쪽**: "SiNODE" (Smart Node & Provider Gateway) - "DTA's B2B Tech & Business Gateway"
- 연결선: CSS/SVG로 구현
- 하단 카드: "Ecosystem Synergy" (보라색 테마)

**이미지 필요 여부**: 
- ❌ 모두 컴포넌트로 구현 가능 (아이콘은 lucide-react 사용)

---

### 2.4 Focusing on the Thai Premium Tourism Market Section (컴포넌트로 구현)

**현재 상태**: MarketFocusSection이 있으나 내용이 다름

**신규 생성 필요**: `ThaiPremiumTourismSection.tsx`

**구성 요소**:
- 제목: "Focusing on the Thai Premium Tourism Market"
- 부제목: 데이터 기반 시장 진입 전략 설명
- **Market of Opportunity**: 태국 시장 설명 (컴포넌트)
- **Core Target**: 한국 관광객 언급 (컴포넌트)
- **High-Yield Niche Focus**: 3개 카드
  - "Golf Tourism" (컴포넌트)
  - "Medical & Wellness" (컴포넌트)
  - "Luxury & Experiential Travel" (컴포넌트)
- **Phased Market Penetration**: 3단계 번호 목록 (컴포넌트)

**이미지 필요 여부**: 
- ❌ 모두 컴포넌트로 구현 가능

---

### 2.5 Technology Architecture for Trust Section (컴포넌트로 구현)

**현재 상태**: TechArchitectureSection 있음 (내용 수정 필요)

**수정 필요 사항**:
- 제목: "Technology Architecture for Trust"
- 부제목: 하이브리드 기술에 대한 설명
- 3개 카드 (가로 배치):
  - "Hybrid Architecture": SiNODE 백엔드 및 Layer 2 개발 설명
  - "NFT Audit Proofs": NFT를 사용한 비즈니스 로직 및 감사 설명
  - "Phased Network Expansion": Layer 2 네트워크에서 서비스 출시 상세 정보

**이미지 필요 여부**: 
- ❌ 모두 컴포넌트로 구현 가능

---

### 2.6 DTA's Technology Journey to 2027 (Roadmap) Section (컴포넌트로 구현)

**현재 상태**: RoadmapSection 있음 (내용 수정 필요)

**수정 필요 사항**:
- 제목: "DTA's Technology Journey to 2027"
- 부제목: "Our strategic technology development plan"
- 테이블 형식 로드맵:
  - **2025**: "Foundation & Launch" - "Finalize SiNODE v1", "Deploy core contracts" 등
  - **2026**: "Integration & Scaling" - "SiMX v1", "Premium analytics suite" 등
  - **2027**: "Sovereignty & Leadership" - "Public L3 rollout", "SDK release" 등
- "View Full Roadmap" 링크

**이미지 필요 여부**: 
- ❌ 모두 컴포넌트로 구현 가능

---

### 2.7 Partner Network Section (컴포넌트 + 이미지)

**현재 상태**: PartnerNetworkSection 있음

**수정 필요 사항**:
- 제목: "Partner Network"
- 부제목: 최고 파트너와 협력 설명
- 8개 파트너 로고 그리드

**이미지 필요 여부**: 
- ✅ **필요**: 파트너 로고 이미지 8개
  - 파일명: `partner-logo-1.png` ~ `partner-logo-8.png`
  - 위치: `public/images/partners/`
  - 형식: PNG (투명 배경 권장)
  - 크기: 최소 200x100px (비율 유지)

---

### 2.8 Media Room Section (컴포넌트 + 이미지)

**현재 상태**: ❌ **신규 생성 필요**

**신규 생성 필요**: `MediaRoomSection.tsx`

**구성 요소**:
- 제목: "Media Room"
- 부제목: 뉴스 및 언론 보도 설명
- 3개 미디어 카드:
  1. **카드 1**: 서명식 이미지 + "DTA Signs MOU with Tourism Authority of Thailand to Attract Premium Tourists"
  2. **카드 2**: 파란색 배경 + "SiMX Successfully Launches on Base L2 Mainnet"
  3. **카드 3**: 다크 블루 배경 + "DTA Secures Pilot Trust with USDC-Powered Settlement System"

**이미지 필요 여부**: 
- ✅ **필요**: 미디어 카드 이미지 3개
  - 파일명: 
    - `media-mou-signing.jpg` (서명식 이미지)
    - `media-simx-launch.jpg` (또는 배경 이미지)
    - `media-pilot-trust.jpg` (또는 배경 이미지)
  - 위치: `public/images/media/`
  - 형식: JPG 또는 PNG
  - 크기: 최소 400x300px (비율 유지)

---

### 2.9 Ready to Get Started? Section (컴포넌트로 구현)

**현재 상태**: ❌ **신규 생성 필요**

**신규 생성 필요**: `BottomCTASection.tsx`

**구성 요소**:
- 배경: 파란색 그라데이션 (CSS로 구현)
- 제목: "Ready to Get Started?"
- 설명 텍스트: "Join DTA today and unlock access..."
- 2개 버튼:
  - "Connect Wallet" (파란색)
  - "Learn More" (흰색, 파란색 테두리)

**이미지 필요 여부**: 
- ❌ 모두 컴포넌트로 구현 가능

---

### 2.10 Footer (컴포넌트로 구현)

**현재 상태**: 기본 구조 있음 (내용 수정 필요)

**수정 필요 사항**:
- 배경: 다크 블루 (#0B1120)
- 왼쪽: "DTA." 로고
- 4개 컬럼:
  - "Get Started" (링크 목록)
  - "Use Cases" (링크 목록)
  - "Developers" (링크 목록)
  - "Stay Updated" (뉴스레터 구독 입력 필드)
- 하단: 저작권 정보 + 소셜 미디어 아이콘

**이미지 필요 여부**: 
- ❌ 모두 컴포넌트로 구현 가능 (소셜 아이콘은 lucide-react 사용)

---

## 3. 필요한 이미지 목록 (Figma에서 Export 필요)

### 3.1 파트너 로고 (8개)
```
public/images/partners/
├── partner-logo-1.png
├── partner-logo-2.png
├── partner-logo-3.png
├── partner-logo-4.png
├── partner-logo-5.png
├── partner-logo-6.png
├── partner-logo-7.png
└── partner-logo-8.png
```

**요구사항**:
- 형식: PNG (투명 배경 권장)
- 크기: 최소 200x100px (원본 비율 유지)
- 스타일: 파트너 로고 원본

---

### 3.2 미디어 룸 이미지 (3개)
```
public/images/media/
├── media-mou-signing.jpg
├── media-simx-launch.jpg
└── media-pilot-trust.jpg
```

**요구사항**:
- 형식: JPG 또는 PNG
- 크기: 최소 400x300px (원본 비율 유지)
- 설명:
  1. `media-mou-signing.jpg`: 태국 관광청과의 MOU 서명식 이미지
  2. `media-simx-launch.jpg`: SiMX 런칭 관련 이미지 (또는 배경 이미지)
  3. `media-pilot-trust.jpg`: 파일럿 트러스트 관련 이미지 (또는 배경 이미지)

---

### 3.3 선택 사항: 로고 이미지
```
public/images/
└── logo.svg (또는 logo.png)
```

**요구사항**:
- 형식: SVG (권장) 또는 PNG
- 크기: 적절한 해상도
- 설명: "DTA." 로고 (텍스트로 대체 가능하지만, 이미지가 있으면 더 좋음)

---

## 4. 구현 우선순위

### Phase 1: 컴포넌트 구현 (이미지 없이)
1. ✅ Header 수정
2. ✅ HeroSection 수정
3. ✅ InfrastructureSection 수정 (DTA, SiMX, SiNODE 구조)
4. ✅ ThaiPremiumTourismSection 신규 생성
5. ✅ TechArchitectureSection 수정
6. ✅ RoadmapSection 수정
7. ✅ MediaRoomSection 신규 생성 (플레이스홀더 이미지 사용)
8. ✅ BottomCTASection 신규 생성
9. ✅ Footer 수정
10. ✅ page.tsx에 모든 섹션 연결

### Phase 2: 이미지 적용
1. 파트너 로고 이미지 적용
2. 미디어 룸 이미지 적용
3. 로고 이미지 적용 (선택)

---

## 5. 컴포넌트 vs 이미지 요약

### ✅ 컴포넌트로 구현 (이미지 불필요)
- Header (로고 제외)
- Hero Section 전체
- Infrastructure Section 전체
- Thai Premium Tourism Section 전체
- Technology Architecture Section 전체
- Roadmap Section 전체
- Bottom CTA Section 전체
- Footer 전체

### ✅ 이미지 필요
- **파트너 로고 8개** (필수)
- **미디어 룸 이미지 3개** (필수)
- 로고 이미지 1개 (선택)

---

## 6. 다음 단계

1. **이미지 Export 요청**: 위에 명시된 이미지들을 Figma에서 export
2. **컴포넌트 구현**: Phase 1 진행 (플레이스홀더 사용)
3. **이미지 적용**: Phase 2 진행 (실제 이미지 교체)

