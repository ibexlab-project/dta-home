# 다국어(i18n) 작업 가이드

## 📋 개요

이 프로젝트는 영문(EN)과 태국어(TH) 버전을 지원합니다. 개발자는 **영문 버전에서만 작업**하며, 태국어 번역은 별도로 관리됩니다.

## 🏗️ 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (공통)
│   ├── globals.css         # 전역 스타일
│   ├── page.tsx            # 영문 버전 (기본 경로: /)
│   ├── en/
│   │   └── page.tsx        # 영문 버전 (명시적 경로: /en)
│   └── th/
│       └── page.tsx        # 태국어 버전 (경로: /th)
│
├── components/
│   ├── layout/             # 공통 레이아웃 컴포넌트
│   └── sections/           # 섹션 컴포넌트
│
└── translations/
    ├── en.json             # 영문 번역 파일
    └── th.json             # 태국어 번역 파일
```

## 🔄 작업 워크플로우

### 1. 영문 버전 작업 (기본)

**항상 `src/app/page.tsx` 또는 `src/app/en/page.tsx`에서 작업합니다.**

```typescript
// src/app/page.tsx 또는 src/app/en/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
// ... 기타 컴포넌트

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* ... */}
    </div>
  );
}
```

### 2. 컴포넌트 수정 시 주의사항

**✅ 하드코딩된 텍스트를 피하세요:**
```typescript
// ❌ 나쁜 예
<h1>Digital Assets, Real-World Privileges</h1>

// ✅ 좋은 예 (번역 키 사용)
<h1>{t('hero.title')}</h1>
```

**✅ 컴포넌트는 언어에 독립적으로 작성:**
```typescript
// 컴포넌트는 번역 키를 받아서 표시만 함
export function HeroSection({ title, description }: Props) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
```

### 3. 번역 파일 관리

**영문 번역 파일 (`src/translations/en.json`):**
```json
{
  "hero": {
    "title": "Digital Assets, Real-World Privileges",
    "subtitle": "DTA connects the digital economy..."
  },
  "navigation": {
    "coreStructure": "Core Structure",
    "marketStrategy": "Market Strategy"
  }
}
```

**태국어 번역 파일 (`src/translations/th.json`):**
```json
{
  "hero": {
    "title": "สินทรัพย์ดิจิทัล สิทธิพิเศษในโลกจริง",
    "subtitle": "DTA เชื่อมต่อเศรษฐกิจดิจิทัล..."
  },
  "navigation": {
    "coreStructure": "โครงสร้างหลัก",
    "marketStrategy": "กลยุทธ์ตลาด"
  }
}
```

## 📝 작업 체크리스트

### 새로운 기능 추가 시:

1. ✅ **영문 버전에만 작업**
   - `src/app/page.tsx` 또는 `src/app/en/page.tsx` 수정
   - 컴포넌트는 언어 독립적으로 작성

2. ✅ **번역 키 추가**
   - `src/translations/en.json`에 영문 텍스트 추가
   - 번역 키는 의미있는 이름 사용 (예: `hero.title`, `nav.home`)

3. ✅ **태국어 번역 요청**
   - 번역 담당자에게 `src/translations/en.json`의 새 키 전달
   - 태국어 번역을 `src/translations/th.json`에 추가

4. ✅ **태국어 페이지 동기화**
   - `src/app/th/page.tsx`를 영문 버전과 동일한 구조로 유지
   - 번역 파일만 다르게 로드

### 컴포넌트 수정 시:

1. ✅ **텍스트는 번역 키로 교체**
2. ✅ **스타일/레이아웃 변경은 자동으로 양쪽 언어에 적용**
3. ✅ **새로운 텍스트가 추가되면 번역 파일 업데이트**

## 🔗 언어 전환 구현

### Header 컴포넌트 수정

```typescript
// src/components/layout/Header.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLanguageChange = (lang: 'en' | 'th') => {
    // 현재 경로에서 언어 부분만 변경
    const newPath = pathname.replace(/^\/(en|th)/, `/${lang}`) || `/${lang}`;
    router.push(newPath);
  };
  
  // 현재 언어 감지
  const currentLang = pathname.startsWith('/th') ? 'TH' : 'EN';
  
  return (
    <header>
      {/* 언어 선택 버튼 */}
      <button onClick={() => handleLanguageChange('en')}>EN</button>
      <button onClick={() => handleLanguageChange('th')}>TH</button>
    </header>
  );
}
```

## 📂 파일 생성 가이드

### 태국어 페이지 생성

```typescript
// src/app/th/page.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
// ... 동일한 컴포넌트들 import

export default function HomeTH() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1 w-full">
        {/* 영문 버전과 동일한 구조 */}
        <HeroSection />
        <InfrastructureSection />
        {/* ... */}
      </main>
      <Footer />
    </div>
  );
}
```

**중요:** 태국어 페이지는 영문 페이지와 **구조가 동일**해야 합니다. 차이는 번역 파일만 다릅니다.

## 🎯 번역 파일 사용 예시

### 컴포넌트에서 번역 사용

```typescript
// src/components/sections/HeroSection.tsx
'use client';

import { useTranslations } from '@/hooks/useTranslations';

export function HeroSection() {
  const t = useTranslations();
  
  return (
    <section>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </section>
  );
}
```

### 번역 훅 구현

```typescript
// src/hooks/useTranslations.ts
'use client';

import { usePathname } from 'next/navigation';
import enTranslations from '@/translations/en.json';
import thTranslations from '@/translations/th.json';

export function useTranslations() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/th') ? 'th' : 'en';
  const translations = lang === 'th' ? thTranslations : enTranslations;
  
  return (key: string) => {
    const keys = key.split('.');
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}
```

## ⚠️ 주의사항

1. **영문 버전에서만 작업**: 항상 `src/app/page.tsx` 또는 `src/app/en/page.tsx`에서 작업
2. **하드코딩 금지**: 모든 텍스트는 번역 키 사용
3. **구조 동일 유지**: 태국어 페이지는 영문과 동일한 컴포넌트 구조
4. **번역 파일 동기화**: 새로운 텍스트 추가 시 양쪽 번역 파일 업데이트
5. **스타일 공유**: 스타일/레이아웃은 자동으로 양쪽 언어에 적용됨

## 📌 요약

- ✅ **개발**: 영문 버전(`src/app/page.tsx`)에서만 작업
- ✅ **번역**: `src/translations/en.json`과 `src/translations/th.json` 관리
- ✅ **구조**: 태국어 페이지는 영문과 동일한 컴포넌트 사용
- ✅ **전환**: Header의 언어 선택 버튼으로 `/en` ↔ `/th` 이동

이 가이드를 따르면 영문 버전에서만 작업해도 태국어 버전이 자동으로 동기화됩니다!

