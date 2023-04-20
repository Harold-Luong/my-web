import img1 from "../asset/bg-img/1.jpg";
import img2 from "../asset/bg-img/2.jpg";
import img3 from "../asset/bg-img/3.jpg";
import img4 from "../asset/bg-img/4.jpg";
import img5 from "../asset/bg-img/5.jpg";
import img6 from "../asset/bg-img/6.jpg";
import img7 from "../asset/bg-img/7.jpg";
import img8 from "../asset/bg-img/8.jpg";
import img9 from "../asset/bg-img/9.jpg";
import img10 from "../asset/bg-img/10.jpg";
import img11 from "../asset/bg-img/11.jpg";
import img12 from "../asset/bg-img/12.jpg";
import img13 from "../asset/bg-img/13.jpg";
import img14 from "../asset/bg-img/14.jpg";
import img15 from "../asset/bg-img/15.jpg";
import img16 from "../asset/bg-img/16.jpg";
import img17 from "../asset/bg-img/17.jpg";
import img18 from "../asset/bg-img/18.jpg";
import img19 from "../asset/bg-img/19.jpg";
import img20 from "../asset/bg-img/20.jpg";
import img21 from "../asset/bg-img/21.jpg";
import img22 from "../asset/bg-img/22.jpg";
import img23 from "../asset/bg-img/23.jpg";
import img24 from "../asset/bg-img/24.jpg";
import img25 from "../asset/bg-img/28.jpg";
import img26 from "../asset/bg-img/26.jpg";
import img27 from "../asset/bg-img/27.jpg";
import img28 from "../asset/bg-img/28.jpg";
import img29 from "../asset/bg-img/29.jpg";
import img30 from "../asset/bg-img/30.jpg";
import img31 from "../asset/bg-img/31.jpg";
import img32 from "../asset/bg-img/32.jpg";
import img33 from "../asset/bg-img/33.jpg";

const itemsPerPage = 6;

const imageGalleryData = [
  {
    id: 1,
    location: "Vũng Tàu",
    title: "Bãi biển Thùy Vân",
    description:
      "Cảnh đẹp bãi biển Thùy Vân ở Vũng Tàu Integer at pharetra metus, non porttitor lorem. Pellentesque consectetur lacus at erat maximus fringilla. Mauris suscipit commodo lacus id rutrum. Suspendisse potenti. Vestibulum cursus lobortis suscipit. Pellentesque vel eleifend urna. Praesent id pellentesque metus. Aenean accumsan ipsum ac consectetur convallis. Sed efficitur blandit turpis ut rhoncus. Integer vehicula risus eget purus porttitor gravida. Ut dapibus aliquet quam, non tempus elit varius non. Aliquam rutrum molestie ipsum eu feugiat.",
    src: img1,
  },
  {
    id: 2,
    location: "Tây Ninh",
    title: "Chùa Bà Đen",
    description: "Kiến trúc đẹp của chùa Bà Đen ở Tây Ninh",
    src: img2,
  },
  {
    id: 3,
    location: "Nha Trang",
    title: "Tháp Bà Ponagar",
    description: "Kiến trúc đẹp của tháp Bà Ponagar ở Nha Trang",
    src: img3,
  },
  {
    id: 4,
    location: "Phú Quý",
    title: "Bãi biển Trường Chinh",
    description: "Cảnh đẹp bãi biển Trường Chinh ở Phú Quý",
    src: img4,
  },
  {
    id: 5,
    location: "Hà Giang",
    title: "Cánh đồng hoa tam giác mạch",
    description: "Cảnh đẹp cánh đồng hoa tam giác mạch ở Hà Giang",
    src: img5,
  },
  {
    id: 6,
    location: "Vũng Tàu",
    title: "Biển hồ Tràm",
    description: "Cảnh đẹp biển hồ Tràm ở Vũng Tàu",
    src: img6,
  },
  {
    id: 7,
    location: "Tây Ninh",
    title: "Núi Bà Đen",
    description: "Cảnh đẹp núi Bà Đen ở Tây Ninh",
    src: img7,
  },
  {
    id: 8,
    location: "Nha Trang",
    title: "Bãi biển Nha Trang",
    description: "Cảnh đẹp bãi biển Nha Trang",
    src: img8,
  },
  {
    id: 9,
    location: "Phú Quý",
    title: "Rạn San Hô Ông Nam Hai",
    description: "Cảnh đẹp rạn san hô Ông Nam Hải ở Phú Quý",
    src: img9,
  },
  {
    id: 10,
    location: "Hà Giang",
    title: "Đỉnh Mã Pì Lèng",
    description: "Cảnh đẹp đỉnh Mã Pì Lèng ở Hà Giang",
    src: img10,
  },
  {
    id: 11,
    location: "Vũng Tàu",
    title: "Đồi Con Heo",
    description: "Cảnh đẹp đồi Con Heo ở Vũng Tàu",
    src: img11,
  },

  {
    id: 12,
    location: "Tây Ninh",
    title: "Công viên Dầu Tiếng",
    description: "Cảnh đẹp công viên Dầu Tiếng ở Tây Ninh",
    src: img12,
  },
  {
    id: 13,
    location: "Nha Trang",
    title: "Hòn Mun",
    description: "Cảnh đẹp Hòn Mun ở Nha Trang",
    src: img13,
  },
  {
    id: 14,
    location: "Phú Quý",
    title: "Gành Đá Dĩa",
    description: "Cảnh đẹp Gành Đá Dĩa ở Phú Quý",
    src: img14,
  },
  {
    id: 15,
    location: "Hà Giang",
    title: "Cao nguyên đá Đồng Văn",
    description: "Cảnh đẹp cao nguyên đá Đồng Văn ở Hà Giang",
    src: img15,
  },
  {
    id: 16,
    location: "Vũng Tàu",
    title: "Thích Ca Phật Đài",
    description: "Kiến trúc đẹp của Thích Ca Phật Đài ở Vũng Tàu",
    src: img16,
  },
  {
    id: 17,
    location: "Tây Ninh",
    title: "Đền Cao Đài Tây Ninh",
    description: "Kiến trúc đẹp của đền Cao Đài Tây Ninh",
    src: img17,
  },
  {
    id: 18,
    location: "Nha Trang",
    title: "Thiền Viện Trúc Lâm",
    description: "Kiến trúc đẹp của Thiền Viện Trúc Lâm ở Nha Trang",
    src: img18,
  },
  {
    id: 19,
    location: "Phú Quý",
    title: "Bãi biển Đại Bình",
    description: "Cảnh đẹp bãi biển Đại Bình ở Phú Quý",
    src: img19,
  },
  {
    id: 20,
    location: "Hà Giang",
    title: "Núi Cao",
    description: "Cảnh đẹp núi Cao ở Hà Giang",
    src: img20,
  },
  {
    id: 21,
    location: "Vũng Tàu",
    title: "Hải đăng Vũng Tàu",
    description: "Cảnh đẹp hải đăng Vũng Tàu",
    src: img21,
  },
  {
    id: 22,
    location: "Tây Ninh",
    title: "Hang Pagoda",
    description: "Kiến trúc đẹp của Hang Pagoda ở Tây Ninh",
    src: img22,
  },
  {
    id: 23,
    location: "Nha Trang",
    title: "Lăng Chủ tịch Trần Đại Nghĩa",
    description: "Kiến trúc đẹp của Lăng Chủ tịch Trần Đại Nghĩa ở Nha Trang",
    src: img23,
  },
  {
    id: 24,
    location: "Phú Quý",
    title: "Hòn Tranh",
    description: "Cảnh đẹp Hòn Tranh ở Phú Quý",
    src: img24,
  },
  {
    id: 25,
    location: "Hà Giang",
    title: "Thác Bản Giốc",
    description: "Cảnh đẹp thác Bản Giốc ở Hà Giang",
    src: img25,
  },
  {
    id: 26,
    location: "Vũng Tàu",
    title: "Thắng cảnh Đồi Nhám",
    description: "Cảnh đẹp thắng cảnh Đồi Nhám ở Vũng Tàu",
    src: img26,
  },
  {
    id: 27,
    location: "Tây Ninh",
    title: "Đường Hầm Củ Chi",
    description: "Kiến trúc đẹp của Đường Hầm Củ Chi ở Tây Ninh",
    src: img27,
  },
  {
    id: 28,
    location: "Hạ Long",
    title: "Vịnh Hạ Long",
    description: "Khám phá vẻ đẹp kỳ vĩ của Vịnh Hạ Long",
    src: img28,
  },
  {
    id: 29,
    location: "Đà Lạt",
    title: "Thung lũng Tình Yêu",
    description: "Thung lũng lãng mạn và đẹp nhất của Đà Lạt",
    src: img29,
  },
  {
    id: 30,
    location: "Hội An",
    title: "Phố cổ Hội An",
    description: "Khám phá phố cổ độc đáo và đẹp nhất Việt Nam",
    src: img30,
  },
  {
    id: 31,
    location: "Sài Gòn",
    title: "Công viên 30/4",
    description: "Thưởng ngoạn công viên 30/4 với thiết kế đẹp và hiện đại",
    src: img31,
  },
  {
    id: 32,
    location: "Nha Trang",
    title: "Bãi biển Nha Trang",
    description:
      "Tận hưởng không gian yên bình, thư giãn với bãi biển Nha Trang",
    src: img32,
  },
  {
    id: 33,
    location: "Đà Nẵng",
    title: "Cầu Rồng Đà Nẵng",
    description: "Chiêm ngưỡng vẻ đẹp độc đáo của Cầu Rồng Đà Nẵng",
    src: img33,
  },
];

const totalPages = Array.from(
  { length: Math.ceil(imageGalleryData.length / itemsPerPage) },
  (_, i) => i + 1
);
export { imageGalleryData, itemsPerPage, totalPages };
