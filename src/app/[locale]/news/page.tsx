import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getTranslations, type Locale } from "@/lib/get-translations";
import { getMediaCards } from "@/lib/media-cards";

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'th' ? 'th' : 'en') as Locale;
  const t = getTranslations(locale).media;
  const allMediaCards = getMediaCards(locale);

  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      <Header locale={locale} />
      <main className="flex-1 w-full">
        {/* Page Header */}
        <section className="bg-white" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
          <div style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
            <div className="text-center mb-12">
              <h1 
                className="font-normal mb-4"
                style={{ fontSize: '48px', whiteSpace: 'nowrap' }}
              >
                <span style={{ color: '#101828' }}>{t.newsPageTitle1} </span>
                <span style={{ color: '#0279D5' }}>{t.newsPageTitle2}</span>
              </h1>
              <p 
                className="font-normal max-w-2xl mx-auto"
                style={{
                  color: '#4A5565',
                  fontSize: '18px'
                }}
              >
                {t.newsPageSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="bg-white pb-24">
          <div style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
            <div>
              {allMediaCards.map((card, index) => (
                <div key={index}>
                  <article 
                    id={`news-${index}`}
                    className="w-full" 
                    style={{ 
                      paddingBottom: index < allMediaCards.length - 1 ? '80px' : '0',
                      scrollMarginTop: '100px'
                    }}
                  >
                    {/* 컨텐츠 */}
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                      {/* 제목 */}
                      <h2 
                        className="font-bold mb-6"
                        style={{
                          color: '#101828',
                          fontSize: '32px',
                          lineHeight: '1.3'
                        }}
                      >
                        {card.title}
                      </h2>
                      
                      {/* 이미지 - 원본 크기 */}
                      <div className="mb-6" style={{ textAlign: 'center' }}>
                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                            display: 'block',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                      
                      {/* 내용 */}
                      <div 
                        className="media-card-content"
                        style={{
                          color: '#111827',
                          fontSize: '18px',
                          fontWeight: '500',
                          lineHeight: '1.7'
                        }}
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
                    </div>
                  </article>
                  
                  {/* 구분선 */}
                  {index < allMediaCards.length - 1 && (
                    <div 
                      style={{
                        borderTop: '1px solid #E5E7EB',
                        marginTop: '80px',
                        marginBottom: '80px'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

