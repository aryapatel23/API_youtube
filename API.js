const express = require ('express');

const app = express();
const cors =require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Sample data
const grid = [
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        title: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
        subtitle1: "Coke Studio Bangla",
        subtitle2: "1.5M views • 2 days ago",
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
        title: "Infinix Note 12: AMOLED Hello G88 Soc!",
        subtitle1: "Coke Studio Bangla",
        subtitle2: "1.5M views • 2 days ago",
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: 'My first UX Design case study - This got me my first job.',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        title: 'My mix', subtitle1: 'Lopamudra Mitra , anupam Roy , and more',
        subtitle2: ' ',
        subtitleimg: ""
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
    {
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
        smallimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
        title: 'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita',
        subtitle1: 'Coke Studio Bangla',
        subtitle2: ' 1.5M views . 2 days ago',
        subtitleimg: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
    },
];

// Routes
app.get("/grid", (req, res) => {
    res.json(grid);
});

// Server setup
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
