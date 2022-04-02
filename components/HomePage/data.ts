const icons = [
    {
        id: 1,
        iconType: 'Ionicons',
        iconName: 'ios-rocket',
        iconSize: 24,
        iconColor: '#32a7e2',
        backgroundColor: '#c7e1ee',
        title: 'Transfer'
    },
    {
        id: 2,
        iconType: 'Ionicons',
        iconName: 'ios-phone-portrait-outline',
        iconSize: 22,
        iconColor: '#b548c6',
        backgroundColor: '#f1dcf5',
        title: 'Airtime'
    },
    {
        id: 3,
        iconType: 'Ionicons',
        iconName: 'wallet',
        iconSize: 21,
        iconColor: '#ff8700',
        backgroundColor: '#f6e0c7',
        title: 'Bill'
    },
    {
        id: 4,
        iconType: 'Entypo',
        iconName: 'grid',
        iconSize: 24,
        iconColor: '#22b07d',
        backgroundColor: '#c9efe1',
        title: 'More'
    }
]

const sis = require('../../assets/images/sis.jpeg')
const annie = require('../../assets/images/annie.jpg')
const proc = require('../../assets/images/unnamed.jpg')

const transactions = [
    {
        id: 1,
        spendType: 'Sister noa',
        date: '9 Nov, 21',
        amount: 'Tsh 340000',
        iconName: sis,
        iconColor: '#22b07d',
        from: 'Emirates',
    },
    {
        id: 2,
        spendType: 'Annie',
        date: '10 Nov, 21',
        amount: 'Tsh 50000',
        iconName: annie,
        iconColor: '#22b07d',
        from: 'M-Pesa',
    },
    {
        id: 3,
        spendType: 'young bro',
        date: '19 Nov, 21',
        amount: 'Tsh 5000',
        iconName: proc,
        iconColor: '#22b07d',
        from: 'M-Pesa',
    },
    {
        id: 4,
        spendType: 'Gym day',
        date: '9 Nov, 21',
        amount: annie,
        iconName: 'barbell-sharp',
        iconColor: '#22b07d',
        from: 'Mall',
    },
    {
        id: 5,
        spendType: 'Shoes',
        date: '10 Nov, 2021',
        amount: '50000',
        iconName: proc,
        iconColor: '#22b07d',
        from: 'Mall',
    },
]

const appdata = {
    icons: icons,
    transactions: transactions
}

export default appdata;