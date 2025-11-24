# 다국어 작업 빠른 시작 가이드

## 🎯 핵심 원칙

**영문 버전에서만 작업 → 태국어는 자동 동기화**

## 📁 파일 구조

```
src/app/
├── page.tsx          ← 여기서만 작업!
├── en/page.tsx       ← 영문 (명시적)
└── th/page.tsx       ← 태국어 (자동 동기화)

src/translations/
├── en.json           ← 영문 텍스트
└── th.json           ← 태국어 텍스트
```

## ✅ 작업 순서

### 1. 새 기능 추가 시
```
1. src/app/page.tsx 수정 (영문 버전)
2. src/translations/en.json에 텍스트 추가
3. 번역 담당자에게 태국어 번역 요청
4. src/translations/th.json 업데이트
```

### 2. 컴포넌트 수정 시
```
1. 컴포넌트는 언어 독립적으로 작성
2. 텍스트는 번역 키 사용 (예: t('hero.title'))
3. 스타일 변경은 자동으로 양쪽 언어에 적용
```

## 🔑 번역 키 사용법

```typescript
// ❌ 하드코딩
<h1>Digital Assets</h1>

// ✅ 번역 키 사용
<h1>{t('hero.title')}</h1>
```

## 📝 번역 파일 예시

**en.json:**
```json
{
  "hero": {
    "title": "Digital Assets, Real-World Privileges"
  }
}
```

**th.json:**
```json
{
  "hero": {
    "title": "สินทรัพย์ดิจิทัล สิทธิพิเศษในโลกจริง"
  }
}
```

## ⚠️ 기억할 것

- ✅ 항상 `src/app/page.tsx`에서만 작업
- ✅ 하드코딩된 텍스트 금지
- ✅ 태국어 페이지는 영문과 동일한 구조
- ✅ 새 텍스트 추가 시 번역 파일 업데이트

자세한 내용은 `i18n-workflow-guide.md` 참고하세요.

