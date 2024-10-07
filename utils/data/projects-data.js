import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'WRTeam Website',
        description: "Developed the company website from scratch, focusing on frontend development. Utilized Next.js, Redux, Bootstrap, and Ant Design to create a fully functional and responsive web interface. Integrated data fetched from APIs, converting design elements into high-quality, maintainable code, ensuring seamless user experiences across all devices.",
        tools: ['NextJS,Redux,Bootstrap and AntD'],
        code: '',
        demo: 'https://www.wrteam.in/',
        image: crefin,
    },
    {
        id: 2,
        name: 'News Web App',
        description: 'Developed a News Web App using Next.js. The app fetches real-time news data from APIs and integrates dynamic ad placements to optimize revenue. Ensured responsive design and efficient state management for seamless user interaction.',
        tools: ['NextJS', 'Redux', 'React-Query', 'Google-Adsense', 'Firebase', 'Bootstrap'],
        code: '',
        demo: 'https://newsweb.wrteam.me/',
        image: travel,
    },
    {
        id: 3,
        name: 'Amzy',
        description: 'Built a fully functional e-commerce website using Next.js, featuring key functionalities such as product search, shopping cart, wishlist, and payment integration. Ensured a responsive user interface and seamless user experience across all devices, while maintaining clean, modular, and maintainable code.',
        tools: ['NextJS', 'Redux', 'Firebase', 'Bootstrap'],
        code: '',
        demo: 'https://amzy.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Strongtools',
        description: "Converted complex UI designs into responsive and optimized web pages using Tailwind CSS, enhancing code efficiency and design consistency.",
        tools: ['NextJS', 'TailWind', 'Shadcn'],
        code: '',
        demo: 'https://strongtools-landing-page.vercel.app/',
        image: ayla,
    },
    {
        id: 5,
        name: 'Youwatch',
        description: "Developed a YouTube-inspired web application using React.js. Implemented functionality to fetch and display videos based on search queries and categories, providing users with an intuitive and responsive browsing experience.",
        tools: ['ReactJS', 'Bootstrap', 'Youtube API'],
        code: '',
        demo: 'https://youwatchh.netlify.app/',
        image: ayla,
    },

];
