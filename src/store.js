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

        
    ]
});