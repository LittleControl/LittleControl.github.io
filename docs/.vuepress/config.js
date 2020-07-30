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
            '/life/': getLifeSidebar(),
            '/skill/': getSkillSidebar()
        },
        searchMaxSuggestions: 5,
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}

function getLifeSidebar() {
    return [
        '',
        {
            title: 'My Daily Life',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '25', '24', '23', '22', '21', '20',
                '19', '18', '17', '16', '15', '14', '13', '12', '11', '10',
                '09', '08', '07', '06', '05', '04', '03', '02', '01', '00'
            ]
        }
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
                '31', '29', '28',
                '27', '26', '25', '24', '23',
                '21', '20', '19', '18', '17',
                '16', '15', '14', '13', '12',
                '11', '10', '09', '08', '07',
                '06', '05', '04', '01', '00'
            ]
        },
        {
            title: 'Back-End',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '30', '22', '03', '02'
            ]
        }
    ]
}
