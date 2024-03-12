import { reactive } from 'vue'

export const store = reactive({

    navLinks: ["Home", "About", "Services", "Training", "Blogs"],

    footerList: [
        {
            title: 'Support',
            links: ["Contact Us", "Online Chat", "Whatsapp", "Telegram", "Snapchat"]
        },
        {
            title: 'About',
            links: ["About Us", "Blog", "Career", "Job", "In press"]
        },
        {
            title: 'Faq',
            links: ["Account", "Order", "Delivery", "Payment", "Return"]
        },       
    ],

    cardList: [
        {
            image: '/img/d-1.png',
            title: 'Pet Sitting',
            text: 'The readable content of a page when looking at its layout.',
        },
        {
            image: '/img/d-2.png',
            title: 'Puppy Sitting',
            text: 'The readable content of a page when looking at its layout.',
        },
        {
            image: '/img/d-3.png',
            title: 'Dog Walking',
            text: 'The readable content of a page when looking at its layout.',
        },
        {
            image: '/img/d-4.png',
            title: 'Night Care',
            text: 'The readable content of a page when looking at its layout.',
        },
        {
            image: '/img/d-5.png',
            title: 'Pet Sitting',
            text: 'The readable content of a page when looking at its layout.',
        },
        
    ],
});