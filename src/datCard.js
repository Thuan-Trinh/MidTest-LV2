const DataCards = [
    {
        id: "1",
        movieName: "Weather With You",
        description: "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
        image: "./images/home-carosuel.jpg",
        video: './videos/Weather With You.mp4',
        episode: "Episode 01",
        type: 'Tv',
        status: 'Full',
        studios: 'Disney',
        duration: '22 Min',
        genres: ['Fantasy', 'Action']
    },
    {
        id: "2",
        movieName: "Once Piece",
        description: "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
        image: "./images/movie_img_1.jpg",
        video: './videos/One-piece-1018.mp4',
        episode: "Episode 1018",
        type: 'Tv',
        status: 'Ongoing',
        studios: 'Toei Animation',
        duration: '24 Min',
        genres: ['Action', 'Adventure', 'Fantasy']
    },
    {
        id: "3",
        movieName: "Boruto: Naruto Next Generations",
        description: "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
        image: "./images/movie_img_2.jpg",
        video: './videos/Boruto-250mp4.mp4',
        episode: "Episode 250",
        type: 'Tv',
        status: 'Ongoing',
        studios: 'Disney',
        duration: '20 Min',
        genres: ['Fantasy', 'Action', 'Adventure']
    },
    {
        id: "4",
        movieName: "Spy X Family",
        description: "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
        image: "./images/movie_img_3.jpg",
        video: './videos/Spy x Family-7.mp4',
        episode: "Episode 07",
        type: 'Tv',
        status: 'Done',
        studios: 'Toei Animation',
        duration: '25 Min',
        genres: ['Fantasy', 'Action']
    },
    {
        id: "5",
        movieName: "Shingeki no kyojin",
        description: "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
        image: "./images/movie_img_4.jpg",
        video: './videos/Shingeki No Kyojin-18.mp4',
        episode: "Episode 28",
        type: 'Tv',
        status: 'Ongoing',
        studios: 'Toei Animation',
        duration: '26 Min',
        genres: 'Action'
    },
    {
        id: "6",
        movieName: "Captain Tsubasa",
        description: "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
        image: "./images/movie_img_5.jpg",
        video: './videos/Captian Tsubasa -28.mp4',
        episode: "Episode 28",
        type: 'Tv',
        status: 'Full',
        studios: 'Disney',
        duration: '22 Min',
        genres: ['Fantasy', 'Action']
    },
    {
        id: "7",
        movieName: "Ao Ashi",
        description: "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
        image: "./images/movie_img_6.jpg",
        video: './videos/Ao Ashi -18.mp4',
        episode: "Episode 18",
        type: 'Tv',
        status: 'Ongoing',
        studios: 'Toei Animation',
        duration: '22 Min',
        genres: ['Fantasy', 'Action']
    }
]
export default DataCards;

