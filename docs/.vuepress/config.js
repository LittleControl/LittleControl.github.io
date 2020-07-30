module.exports = {
    title: '小控酱的幻想乡',
    description: '游离于颓靡之际,独醉于幻想之中',
    head: [
        ['link', { rel: 'icon', href: '/img/fav.ico' }],
        ['meta', { name: 'keywords', content: '小控酱,littlecontrol,李小控,blog' }]
    ],
    themeConfig: {
        logo: '/img/logo.jpg',
        nav: [
            { text: 'Home', link: '/', target: '_self' },
            { text: 'Life', link: '/life/', target: '_self' },
            { text: 'Skill', link: '/skill/', target: '_self' },
            { text: 'GitHub', link: 'https://github.com/LittleControl', target: '_blank' }
        ],
        sidebar: {
            'life': getLifeSidebar(),
            '/skill/': getSkillSidebar()
        },
        searchMaxSuggestions: 5,
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}

function getLifeSidebar() {
    return [

    ]
}

function getSkillSidebar() {
    return [
        '',
        {
            title: 'Front-End',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '00',
                '01'
            ]
        },
        {
            title: 'Back-End',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '00',
                '01'
            ]
        }
    ]
}
