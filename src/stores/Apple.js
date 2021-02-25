
import { observable, computed, action, runInAction } from 'mobx'
class AppleStore {
    @observable apples = []
    @observable newAppleId = 3
    @observable isPicking = false
    @observable buttonText = '摘苹果'

    @computed get status() {
        let status = {
            curApple: {
                quantity: 0,
                weight: 0
            },
            eatenApple: {
                quantity: 0,
                weight: 0
            }
        }

        this.apples.forEach(apple => {
            let selector = apple.isEaten ? 'eatenApple' : 'curApple'
            status[selector].quantity++
            status[selector].weight += apple.weight
        })

        return status
    }

    @action.bound pickApple() {
        if (this.isPicking) {
            return false
        }

        this.isPicking = true
        this.buttonText = '正在采摘...'

        setTimeout(() => {
            let weight = Math.floor(200 + Math.random() * 50)
            this.isPicking = false
            this.buttonText = '摘苹果'
            this.apples.push({
                id: this.newAppleId++,
                weight,
                isEaten: false
            })
        }, 1000)
    }

    @action.bound eatApple(appleId) {
        let targetIndex = ''
        this.apples.forEach((apple, index) => {
            if (apple.id === appleId) {
                targetIndex = index
            }
        })
        this.apples[targetIndex].isEaten = true
    }
}

const apples = new AppleStore()
export default apples