'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { CalendarIcon, Clock } from 'lucide-react';
// import Image from 'next/image';

export function NewsGrid() {
  // Mock data - would be replaced with API data
  const newsItems = [
    {
      id: 1,
      title: '“Дугуйтай Улаанбаатар-2025” олон нийтийн өдөрлөг үргэлжилж байна.',
      category: 'Хотын мэдээ',
      importance: 'high',
      image: 'https://mgl.gogo.mn/newsn/np/2025/05/10/5228626/496801826_122135345408709147_751269370348666996_n-142404-1872354192.jpeg?fbclid=IwZXh0bgNhZW0CMTEAAR7ncUBH_qDNrYhoWFZxD_GZAilVJCMPhsjpP7P2_cilwMurA7OPEWG--EXQ-A_aem_8GM1NCxUILahIYR53IGPKw',
      date: '2025.03.10',
    },
    {
      id: 2,
      title: 'Тусгаарлах зурвас давж эргэн эсрэг урсгалд явсан 4 автомашиныг мөргөжээ.',
      category: 'Үйл явдал',
      importance: 'medium',
      image: 'https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/05/330569-10052025-1746864456-1553021869-osol.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR65P_nGVvevSjSaJYamphVYKYjKblFnAKKkHLWgcSkzJYU11d4U-2uS6ZVqww_aem_2DsG_4rihYo2D3z0okkSnw',
      date: '2025.03.10',
    },
    {
      id: 3,
      title: 'Ерөнхийлөгч У.Хүрэлсүх Ялалтын баярын ёслолд оролцлоо.',
      category: 'Үйл явдал',
      importance: 'low',
      image: 'https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/05/-10052025-1746856975-553586871-IMG_20250510_094703_472.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR6Uvni0viXn8vIgsHomtghuO2jVsJGzkahyFlFwZ4rddDFAAS2pB3c5sODKnA_aem_KlIKeNyRnned8Z_JGCEsVA',
      date: '2025.03.09',
    },
    {
      "id": 4,
      "title": "Хууль ёсны өмчийг маань шалтгаан тодорхойгүйгээр Нийслэлийн захиргаа дээрэмдэж авлаа.",
      "excerpt": "Б.Дэлгэрмаа гэх эмэгтэй өөрийн цахим сүлжээндээ \"Хууль ёсны өмчийг маань шалтгаан тодорхойгүйгээр Нийслэлийн захиргаа дээрэмдэж авлаа. Х.Нямбаатар та энэ улсын хаан юм уу. Ардчилсан нийгэмд хүний өмчийг зөвшилцөл, зөвшөөрөлгүйгээр дээрэмдэж авч болдог юм уу. Шүүхийн шийдвэр гараагүй байхад хүний барилгыг хүч түрэн нурааж болохгүй биз дээ. Газрын гэрчилгээг цуцлаагүй бөгөөд манай эзэмшлийнх хэвээр байхад барьж буй барилгыг маань яагаад нурааж байгаа юм бэ. Өөр бусад ТҮЦ-үүдийг хүртэл хүнлэг бусаар буулгаж авсныг иргэд мэдэж буй. Өнөөдөр манай газрыг дээрэмдэж авлаа. Маргааш гэхэд үүнийг үзэж байгаа бусад хүний өмч, эзэмшлийг ч гэсэн Нийслэлийн захиргаа хүч түрэн дээрэмдэн авч, нурааж мэднэ\" хэмээн мэдээлэв.\nДээрх газрын маргаан мэдээллийн талаар бид өчигдөр мэдээлсэн. Товч дурдвал, Сүхбаатар дүүргийн I хороонд байрлалтай тус газрыг эзэмшигч гэх \"Оргил МГЛ\" ХХК-ийн захирал С.Лхамноржин хэмээн эмэгтэй хэлэхдээ, \"Нийслэлийн захиргаанаас нэг ч хүн ирж манай компанитай огт уулзаагүй. Харин үргэлж буулгалтын компанийн залуугаар холбогдон ярьж байна. Төрийн байгууллага буулгалтын, хувийн компанитай харьцдаг болсон юм уу? Би ерөөсөө ойлгохгүй байна. Газрын албанаас нэг ч хүн яриагүй, албан бичиг нь ирээгүй\" гэжээ.\nХарин НЗДТГ-ын дарга Д.Амгалан болон холбогдох албаныхан байршил дээр нь ажилласан бөгөөд тэдний зүгээс, \"\"Оргил МГЛ\" ХХК-ийн эзэмшилд хууль бусаар орсон 748 ам.метр талбайг чөлөөлөх тухай 3 шатны шүүхийн шийдвэр гарсан бөгөөд тус компанийн барилга барих зөвшөөрлийг хүчингүй болгосон зэрэгт үндэслэн барилгын каркасыг албадан нурааж, газрыг чөлөөлж байгаа юм.\n2017 онд иргэн Б.Дэлгэрмөрөнгөөс 322 ам.метр газрыг \"Оргил МГЛ\" ХХК-д газар эзэмших эрх шилжүүлж шийдвэрлэсэн, мөн газрын талбайн хэмжээг нэмэгдүүлсэн зэрэг асуудлыг мөн хууль хяналтын байгууллагаар шалгуулж байна\" гэв. \nХарин \"Оргил МГЛ\" ХХК-ийн төлөөлж, эзэмшил газраа булаалгалаа, барилгаа нураалгууллаа хэмээн маргаж буй иргэдийн хувьд, \"Урьд хүмүүсийг газраас булаалгачихлаа гэж ярихад итгэдэггүй байсан. Өөрсдөд минь тулж ирэхэд л ойлгодог юм байна. Нийслэлийн захиргааныхны хэлж буйгаар, \"Энэ бол ОХУ-ын эзэмшил газар. Хоёр улсын харилцаа муудах гээд байна. Энэ газрыг өгчихвөл асуудал шийдэгдэх гээд байна\" гэсэн.\nБидэнд энэ газрыг эзэмших болоод барилга барих бүх зөвшөөрлийн бичиг нь бий. Иргэдийнхээ өмчийг дээрэмдэж авдаг коммунист нийгэм рүү явж байгаа юм байна гэдгийг үзэж буй хүмүүст хэлье\" гэв.",
      "category": "Валютын ханш",
      "importance": "medium",
      "image": "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/05/330568-10052025-1746864389-1711877236-orgil_MGL-155646-384820491_(1)1.jpeg",
      "date": "2025-03-09",
      "time": "11:20"
    },
    {
      id: 5,
      title: 'Өнөөдөр болж буй дугуйтай парадын үеэр ХААХ ЗАМУУД.',
      excerpt: '“Дугуйтай Улаанбаатар-2025” олон нийтийн өдөрлөг болон “Баянзүрх марафон – 2025” өнөөдөр эхэллээ. Өдөрлөгийн хүрээнд дугуйн парад 06:00 – 13:00 цагийн хооронд болох тул доорх авто замын хөдөлгөөнийг хэсэгчлэн хаана.',
      category: 'Шатахууны үнэ',
      importance: 'high',
      image: 'https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/05/-08052025-1746662497-1077768010-681ae2b5870dd507f473c23e.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR6PB56DOsDOpfic3Qv_3JKmPwtW3BRMhgIIoksQxIe13DhRmIHjru6d1HgKtQ_aem_eqAmGWAB_K4LA00gtKdMhQ',
      date: '2025.03.10',
      time: '09:45',
    },
    {
      id: 6,
      title: 'Тэтгэврийн реформ, хөдөлмөр эрхлэлтийн бодлогын шинэчлэлд Дэлхийн банктай хамтарна.',
      excerpt: 'Дэлхийн банкны Ази, Номхон далайн бүсийн хүний хөгжлийн захирал Альберто Родригестэй уулзаж, нийгмийн хамгааллын салбарын хамтын ажиллагааны талаар санал солилцжээ.',
      category: 'Хүнсний бүтээгдэхүүний үнэ',
      importance: 'medium',
      image: 'https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/05/-10052025-1746848830-1794736901-495538916_1097629155725463_2932147425362376474_n.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR4M7r2XcQPO9E_LR44wFHcN7IG0rhmJBPI7C5onATUvAufgzHEgjn9tBe-54w_aem_K-TbN2cPqFdBT29j_36r4A',
      date: '2025.03.09',
      time: '14:30',
    },
  ];
  
  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case 'high':
        return <Badge variant="destructive">Чухал</Badge>;
      case 'medium':
        return <Badge variant="default">Мэдээ</Badge>;
      case 'low':
        return <Badge variant="secondary">Ердийн</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((news) => (
        <Link key={news.id} href={`/news/${news.id}`} className="block">
          <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                {getImportanceBadge(news.importance)}
              </div>
            </div>
            <CardContent className="p-4 flex flex-col h-[calc(100%-12rem)]">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="outline">{news.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>{news.date}</span>
                  <Clock className="h-3 w-3 ml-2 mr-1" />
                  <span>{news.time}</span>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {news.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {news.excerpt}
              </p>
              <div className="mt-auto pt-4 text-primary text-sm font-medium">
                Дэлгэрэнгүй үзэх →
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}