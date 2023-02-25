import { reactive } from 'vue'
import { APISettings } from '/api.config';

export const store = reactive({
    page: '',
    balance: 0,
    debtor: [],
    tags: [],
    transactionType: [],
    users: [],
    currentUserId: window.navigator.userAgent.includes('iPhone') ? 2 : 1,
    currentUserName: window.navigator.userAgent.includes('iPhone') ? import.meta.env.VITE_USER_2_NAME : import.meta.env.VITE_USER_1_NAME,

    async getSummary() {
        const response = await fetch( APISettings.baseURL + 'summary')
            .then(response => response.json())
        this.tags = response.data.tags
        this.transactionType = response.data.transactionType
        this.users = response.data.users
    },

    async getBalance() {
        const response = await fetch( APISettings.baseURL + 'balance')
            .then(response => response.json())
        this.balance = response.data.balance
        this.debtor = response.data.debtor
    },

    setPage(slug) {
        this.page = slug
    },
})

export const transactions = reactive({
    lasts: [],
    all: [],
    async getAll() {
        const response = await fetch(APISettings.baseURL + 'transactions')
            .then(response => response.json())
        this.all = response.data.transactions

    },
    async getLasts() {
        const response = await fetch(APISettings.baseURL + 'lasts-transactions')
            .then(response => response.json())
        this.lasts = response.data.transactions

    },

    async send(form) {
        const response = await fetch(APISettings.baseURL + 'add-transaction',
            {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {"Content-type": "application/json"}
            })
            .then(response => response.status)
            if(response == 500) {
                alert('ERROR')
            }
            await this.getLasts()
            return response
    }

})

export const users = reactive({
    debtor: null
})