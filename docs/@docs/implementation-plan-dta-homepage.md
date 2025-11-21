# 구현 계획 - DTA 홈페이지

## 목표 설명

제공된 Figma 디자인 스크린샷을 기반으로 DTA 홈페이지의 메인 랜딩 페이지를 구현합니다. 이 페이지는 파란색 그라데이션, 카드 기반 레이아웃, 포괄적인 푸터를 특징으로 하는 현대적이고 깔끔한 미학을 제공합니다.

## 사용자 검토 필요 사항

### 아이콘
깔끔하고 표준적인 아이콘을 위해 lucide-react를 사용합니다.

### 폰트
깔끔한 sans-serif 스타일과 일치하도록 Inter 폰트(next/font/google를 통해)를 기본 폰트로 사용합니다.

### 이미지
실제 에셋이 없는 경우 플레이스홀더 이미지(placehold.co 또는 색상이 있는 div)를 사용합니다.

## 제안된 변경 사항

### 의존성

- 아이콘을 위한 lucide-react 설치
- 클래스 관리를 위한 clsx 및 tailwind-merge 설치

### 전역 스타일 및 설정

**[수정]** `tailwind.config.ts`

- 커스텀 색상 추가:
  - primary: 생동감 있는 파란색 (약 #0052FF)
  - secondary: 밝은 파란색/시안
  - dark: 푸터용 어두운 배경 (#0B1120)
- 일관된 중앙 정렬을 위한 컨테이너 설정 추가

**[수정]** `app/layout.tsx`

- Inter 폰트 설정
- 전역 메타데이터 추가

### 컴포넌트

컴포넌트 디렉토리를 생성하고 섹션을 구성합니다.

**[신규]** `components/layout/Header.tsx`

- Sticky 또는 fixed 헤더
- 네비게이션 링크
- "Launch App" 버튼

**[신규]** `components/layout/Footer.tsx`

- 다크 테마
- 4열 레이아웃 + 뉴스레터

**[신규]** `components/sections/HeroSection.tsx`

- 그라데이션 배경
- 중앙 정렬된 히어로 텍스트
- 떠있는 "DTA" 카드 요소

**[신규]** `components/sections/InfrastructureSection.tsx`

- 3개 카드 레이아웃 (트리 구조)
- CSS/SVG를 사용한 연결선

**[신규]** `components/sections/MarketFocusSection.tsx`

- 시장 통계 및 문제점을 위한 그리드 레이아웃

**[신규]** `components/sections/TechArchitectureSection.tsx`

- 3열 기능 목록

**[신규]** `components/sections/RoadmapSection.tsx`

- 연도별 세로 목록 또는 테이블 형식 레이아웃

**[신규]** `components/sections/PartnerNetworkSection.tsx`

- 로고 그리드

**[신규]** `components/sections/MediaRoomSection.tsx`

- 블로그 포스트 카드

**[신규]** `components/sections/BottomCTASection.tsx`

- 파란색 배경의 행동 유도(CTA) 섹션

### 페이지 조립

**[수정]** `app/page.tsx`

- 모든 섹션 컴포넌트를 import하고 스택으로 배치

## 검증 계획

### 자동화된 테스트

- 타입 오류가 없는지 확인하기 위해 `npm run build` 실행
- 코드 품질을 확인하기 위해 `npm run lint` 실행

### 수동 검증

- 반응형 동작 확인 (모바일 vs 데스크톱)
- 버튼 및 카드의 호버 상태 확인
- 네비게이션 링크가 작동하는지 확인 (앵커 링크인 경우에도)
