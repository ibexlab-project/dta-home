export interface MediaCard {
  image: string;
  date: string;
  title: string;
  description: string;
  imageAlt: string;
}

export const getMediaCards = (locale: 'en' | 'th'): MediaCard[] => {
  if (locale === 'th') {
    return [
      {
        image: "/images/media/media_1.png",
        date: "27 พฤศจิกายน 2024",
        title: "Hanatour & Yellow Balloon - จับมือกับสองยักษ์ใหญ่ในอุตสาหกรรมการท่องเที่ยวของเกาหลี",
        description: `<p><em>"จากทัวร์พรีเมียมสู่ทัวร์อัจฉริยะ ทุกอย่างเกี่ยวกับการท่องเที่ยวไทย"</em></p>
        <p>DTA ได้สร้างพันธมิตรเชิงกลยุทธ์กับ 'Hanatour' บริษัททัวร์อันดับ 1 ของเกาหลี และ 'Yellow Balloon' ผู้นำด้านการท่องเที่ยวแบบไร้ฟองสบู่ โดยการรวมเครือข่ายของทั้งสองบริษัทเข้ากับเทคโนโลยีของ DTA เรามอบประสบการณ์การท่องเที่ยวไทยที่เหมาะสมที่สุดที่ปรับให้เหมาะกับลูกค้าหลากหลายประเภท</p>`,
        imageAlt: "ความร่วมมือ Hanatour & Yellow Balloon"
      },
      {
        image: "/images/media/media_2.png",
        date: "06 ตุลาคม 2024",
        title: "ซีอีโอ DTA เยือน Seoul Shinmun & Honam Ilbo อย่างเป็นทางการ... ขยายขั้นตอนความร่วมมือ",
        description: `<p><em>"สร้างความไว้วางใจในสถานที่ สร้างเครือข่ายสื่อทั่วประเทศ"</em></p>
        <p>ซีอีโอ DTA Tanakorn Doltanakarn เยือนเกาหลีและเยี่ยมชมสำนักงานใหญ่ของ 'Seoul Shinmun' และ 'Honam Ilbo' อย่างต่อเนื่อง ผ่านการเยือนครั้งนี้ เราวางแผนที่จะขยายความน่าเชื่อถือของ DTA ทั่วประเทศผ่านเครือข่ายสื่อที่ครอบคลุมทั้งพื้นที่มหานครและศูนย์กลางภูมิภาค</p>`,
        imageAlt: "ซีอีโอ DTA เยือน Seoul Shinmun & Honam Ilbo"
      },
      {
        image: "/images/media/media_3.1.png",
        date: "15 กันยายน 2024",
        title: "ข้อมูลและเศรษฐกิจจริงรวมเป็นหนึ่งด้วยเทคโนโลยี SINODE (ความร่วมมือ KFD)",
        description: `<p><em>"ลงนามสัญญาพัฒนาเฉพาะมูลค่า 150,000 ดอลลาร์สหรัฐกับ Korea Foodservice Data (KFD)"</em></p>
        <p>ในฐานะพันธมิตรเทคโนโลยีเฉพาะของ KFD DTA เชื่อมต่อระบบบริการอาหาร/โรงแรมที่มีอยู่เข้ากับบล็อกเชน</p>
        <ul>
          <li><strong>Zero-Error Booking:</strong> กำจัดข้อผิดพลาดในการจองด้วยเทคโนโลยี DBOS</li>
          <li><strong>Smart Escrow:</strong> สร้างวัฒนธรรมการจองที่โปร่งใสโดยไม่มี No-Shows</li>
          <li><strong>Easy Experience:</strong> ดำเนินการสมาชิกภาพดิจิทัลที่ใช้งานง่าย (SIPASS)</li>
        </ul>`,
        imageAlt: "เทคโนโลยี SINODE ความร่วมมือ KFD"
      }
    ];
  }

  return [
    {
      image: "/images/media/media_1.png",
      date: "27 November 2024",
      title: "Hanatour & Yellow Balloon - Joining Hands with the Two Giants of Korea's Travel Industry",
      description: `<p><em>"From Premium to Smart Tours, Everything about Thai Tourism"</em></p>
        <p>DTA has formed strategic alliances with 'Hanatour', Korea's No.1 travel agency, and 'Yellow Balloon', a leader in bubble-free travel. Combining the networks of these two companies with DTA's technology, we provide the optimal Thai travel experience tailored to various customer types.</p>`,
      imageAlt: "Hanatour & Yellow Balloon partnership"
    },
    {
      image: "/images/media/media_2.png",
      date: "06 October 2024",
      title: "DTA CEO Officially Visits Seoul Shinmun & Honam Ilbo... Broadening Cooperation Steps",
      description: `<p><em>"Building Trust on Site, Establishing a Nationwide Media Network"</em></p>
        <p>DTA CEO Tanakorn Doltanakarn visited Korea and made successive visits to the headquarters of 'Seoul Shinmun' and 'Honam Ilbo'. Through this visit, we plan to expand DTA's credibility nationwide through a media network covering both the metropolitan area and regional hubs.</p>`,
      imageAlt: "DTA CEO visits Seoul Shinmun & Honam Ilbo"
    },
    {
      image: "/images/media/media_3.1.png",
      date: "15 September 2024",
      title: "Data and Real Economy Become One with SINODE Technology (KFD Partnership)",
      description: `<p><em>"Signed USD 150,000 Exclusive Development Contract with Korea Foodservice Data (KFD)"</em></p>
        <p>As KFD's exclusive technology partner, DTA connects existing foodservice/hotel systems to the blockchain.</p>
        <ul>
          <li><strong>Zero-Error Booking:</strong> Eliminate reservation errors with DBOS technology.</li>
          <li><strong>Smart Escrow:</strong> Establish a transparent reservation culture without No-Shows.</li>
          <li><strong>Easy Experience:</strong> Implement an easy-to-use digital membership (SIPASS).</li>
        </ul>`,
      imageAlt: "SINODE Technology KFD Partnership"
    }
  ];
};

