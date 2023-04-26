const blogs = [
  {
    id: 1,
    location: "Tây Ninh",
    title: "Chùa Bà Đen",
    description: "Kiến trúc đẹp của chùa Bà Đen ở Tây Ninh",
    thumbnail: "https://picsum.photos/id/1044/500/300",
    date: "20/05/2022",
    author: "Nguyễn Văn A",
    category: "Du lịch tâm linh",
    tags: ["Chùa", "Du lịch tâm linh"],
  },
  {
    id: 2,
    location: "Phú Yên",
    title: "Bãi Xep",
    description: "Nơi đầy nắng và gió.",
    thumbnail: "https://picsum.photos/id/1011/500/300",
    date: "05/06/2022",
    author: "Nguyễn Thị B",
    category: "Du lịch miền núi",
    tags: ["Du lịch miền núi", "Biển"],
  },
  {
    id: 3,
    location: "Pha Thiết",
    title: "Khám phá đảo Phú Quý",
    description:
      "Đảo Phú Quý có nhiều bãi tắm đẹp và nơi đây cũng là nơi đáp xuống của nhiều loài chim di cư vào mùa đông.",
    thumbnail: "https://picsum.photos/id/1025/500/300",
    date: "10/07/2022",
    author: "Lê Văn C",
    category: "Du lịch biển",
    tags: ["Du lịch biển", "Biển", "Đảo"],
  },
  {
    id: 4,
    location: "Nha Trang",
    title: "Biển Nha Trang",
    description:
      "Với vị trí địa lý thuận lợi, Nha Trang là một trong những địa điểm nổi tiếng về hải sản tươi sống.",
    thumbnail: "https://picsum.photos/id/1006/500/300",
    date: "15/08/2022",
    author: "Phạm Thị D",
    category: "Ẩm thực",
    tags: ["Ẩm thực", "Biển"],
  },
  {
    id: 5,
    location: "Đà Lạt",
    title: "Thác Pongour",
    description:
      "Thác Pongour là một trong những thác đẹp và lớn nhất tại Đà Lạt, nằm cách trung tâm thành phố khoảng 50km về phía Nam. Thác có chiều cao khoảng 40m, bao quanh là rừng thông và đá granite. ",
    thumbnail: "https://picsum.photos/id/1080/500/300",
    date: "01/06/2022",
    author: "Trần Thị B",
    category: "Du lịch sinh thái",
    tags: ["Núi đồi", "Thác nước"],
  },
  {
    id: 6,
    location: "Tây Ninh",
    title: "Chùa Trấn Quốc",
    description:
      "Chùa Trấn Quốc là một trong những di tích văn hóa nổi tiếng của Hà Nội, nằm trên đảo Trấn Quốc của hồ Tây. Đây là ngôi chùa cổ nhất Hà Nội, có niên đại gần 1500 năm.",
    thumbnail: "https://picsum.photos/id/1035/500/300",
    date: "05/06/2022",
    author: "Nguyễn Văn C",
    category: "Du lịch tâm linh",
    tags: ["Chùa", "Du lịch tâm linh"],
  },
  {
    id: 7,
    location: "Kiên Giang",
    title: "Bãi Sao ",
    description:
      "Bãi Sao được coi là một trong những bãi biển đẹp nhất tại Phú Quốc, được biết đến bởi cát trắng và nước biển trong xanh.",
    thumbnail: "https://picsum.photos/id/1027/500/300",
    date: "12/08/2022",
    author: "Nguyễn Văn B",
    category: "Du lịch biển",
    tags: ["Bãi Sao", "Du lịch biển"],
  },
  {
    id: 8,
    location: "Nha Trang",
    title: "Tháp Bà Ponagar ",
    description:
      "Tháp Bà Ponagar là một di tích lịch sử văn hóa của người Chăm, được xây dựng từ thế kỷ VII đến thế kỷ XII.",
    thumbnail: "https://picsum.photos/id/1035/500/300",
    date: "01/09/2022",
    author: "Nguyễn Văn B",
    category: "Du lịch tâm linh",
    tags: ["Tháp Bà Ponagar", "Di tích lịch sử"],
  },
  {
    id: 9,
    location: "Cần Thơ",
    title: "Vịnh Hạ Long - Kỳ quan thiên nhiên thế giới",
    description:
      "Vịnh Hạ Long là một trong những điểm đến du lịch nổi tiếng nhất của Việt Nam, với hình thù đặc biệt của những đá phong cảnh và rất nhiều hòn đảo.",
    thumbnail: "https://picsum.photos/id/1062/500/300",
    date: "20/09/2022",
    author: "Nguyễn Văn C",
    category: "Du lịch biển",
    tags: ["Du lịch biển", "Phong cảnh đẹp"],
  },
  {
    id: 10,
    location: "Cần Thơ",
    title: "Khám phá vịnh Hạ Long",
    description: "Vịnh Hạ Long là một kỳ quan thiên nhiên của thế giới",
    thumbnail: "https://picsum.photos/id/110/500/300",
    date: "10/10/2022",
    author: "Nguyễn Thị B",
    category: "Du lịch sinh thái",
    tags: ["Du lịch biển", "Du lịch sinh thái"],
  },
  {
    id: 11,
    location: "Phan Rang",
    title: "Phố cổ Hội An",
    description: "Khám phá vẻ đẹp phố cổ Hội An - Di sản văn hóa thế giới",
    thumbnail: "https://picsum.photos/id/1012/500/300",
    date: "25/07/2022",
    author: "Nguyễn Thị B",
    category: "Du lịch văn hóa",
    tags: ["Phố cổ", "Di sản văn hóa"],
  },
  {
    id: 12,
    location: "Phan Thiết",
    title: "Sapa - Vùng đất tình yêu",
    description:
      "Sapa là một vùng núi huyền thoại, là vùng đất được thiên nhiên ưu ái ban tặng nhiều cảnh đẹp tuyệt vời.",
    thumbnail: "https://picsum.photos/id/1043/500/300",
    date: "12/09/2022",
    author: "Trần Thị B",
    category: "Du lịch miền Bắc",
    tags: ["Sapa", "Du lịch miền Bắc"],
  },
  {
    id: 13,
    location: "Vũng Tàu",
    title: "Sapa - Vùng đất tình yêu",
    description:
      "Sapa là một vùng núi huyền thoại, là vùng đất được thiên nhiên ưu ái ban tặng nhiều cảnh đẹp tuyệt vời.",
    thumbnail: "https://picsum.photos/id/1043/500/300",
    date: "12/09/2022",
    author: "Trần Thị B",
    category: "Du lịch miền Bắc",
    tags: ["Sapa", "Du lịch miền Bắc"],
  },
  {
    id: 14,
    location: "Phan Thiết",
    title: "Hà Nội - Thủ đô nghìn năm văn hiến",
    description:
      "Hà Nội là một trong những thành phố lâu đời và đầy văn hiến nhất châu Á với nhiều di sản văn hóa, kiến trúc cổ và đặc sản ẩm thực.",
    thumbnail: "https://picsum.photos/id/1041/500/300",
    date: "23/10/2022",
    author: "Nguyễn Văn A",
    category: "Du lịch văn hóa",
    tags: ["Hà Nội", "Du lịch văn hóa"],
  },
  {
    id: 15,
    location: "Nha Trang",
    title: "Nha Trang - Thiên đường biển xanh",
    description:
      "Nha Trang là một trong những thành phố du lịch biển đẹp nhất Việt Nam với những bãi biển trắng, nước biển trong xanh và rất nhiều hoạt động giải trí thú vị.",
    thumbnail: "https://picsum.photos/id/1038/500/300",
    date: "07/11/2022",
    author: "Trần Thị C",
    category: "Du lịch biển",
    tags: ["Nha Trang", "Du lịch biển"],
  },
  {
    id: 16,
    location: "Kiên Giang",
    title: "Phú Quốc - Đảo ngọc của Việt Nam",
    description:
      "Phú Quốc là một trong những đảo du lịch đẹp nhất Việt Nam với những bãi biển trắng, nước biển trong xanh và rất nhiều hoạt động giải trí thú vị.",
    thumbnail: "https://picsum.photos/id/1037/500/300",
    date: "28/11/2022",
    author: "Lê Thị D",
    category: "Du lịch biển",
    tags: ["Đảo", "Du lịch biển"],
  },
  {
    id: 17,
    location: "Đà Nẵng",
    title: "Bãi biển Mỹ Khê",
    description:
      "Bãi biển đẹp nhất Đà Nẵng, nơi đây thu hút du khách bởi cát trắng, nước biển trong xanh",
    thumbnail: "https://picsum.photos/id/1038/500/300",
    date: "15/10/2022",
    author: "Lê Thị C",
    category: "Du lịch biển",
    tags: ["Đà Nẵng", "Bãi biển Mỹ Khê", "Du lịch biển"],
  },
  {
    id: 18,
    location: "Đà Nẵng",
    title: "Đồng Văn",
    description:
      "Đồng Văn là một thị xã thuộc tỉnh Hà Giang, nơi đây có nhiều cảnh đẹp như những ngôi nhà bằng đá, đồi chè xanh ngát",
    thumbnail: "https://picsum.photos/id/1041/500/300",
    date: "18/11/2022",
    author: "Phạm Văn D",
    category: "Du lịch miền Bắc",
    tags: ["Đồng Văn", "Du lịch miền Bắc"],
  },
  {
    id: 19,
    location: "Nha Trang",
    title: "Vịnh Nha Trang",
    description:
      "Vịnh Nha Trang là một trong những vịnh đẹp nhất Việt Nam với nhiều đảo nhỏ, bãi tắm đẹp và rạn san hô",
    thumbnail: "https://picsum.photos/id/1039/500/300",
    date: "20/12/2022",
    author: "Nguyễn Văn E",
    category: "Du lịch biển",
    tags: ["Nha Trang", "Vịnh Nha Trang", "Du lịch biển"],
  },
  {
    id: 20,
    location: "Vũng Tàu",
    title: "Cố đô Huế",
    description:
      "Cố đô Huế là một trong những di sản văn hóa thế giới, nơi đây có nhiều kiến trúc cổ kính, đặc biệt là khu lăng mộ của các vị hoàng đế",
    thumbnail: "https://picsum.photos/id/1040/500/300",
    date: "25/01/2023",
    author: "Trần Văn F",
    category: "Du lịch văn hóa",
    tags: ["Huế", "Cố đô Huế", "Du lịch văn hóa"],
  },
];
const uniqueTags = blogs.reduce((tags, blog) => {
  return [...new Set([...tags, ...blog.tags])];
}, []);

const locationAndTotals = () => {
  const locationCounts = {};
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    if (blog.location in locationCounts) {
      locationCounts[blog.location]++;
    } else {
      locationCounts[blog.location] = 1;
    }
  }

  return Object.entries(locationCounts).map(([location, total]) => ({
    location,
    total,
  }));
};

uniqueTags.unshift("All");
export { blogs, uniqueTags, locationAndTotals };
