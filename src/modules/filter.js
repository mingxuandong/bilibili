
import Vue from 'vue'

//  15232864354653 -> 3月118日
Vue.filter ('premiere', (value) => {
    let date = new Date(value)

    return (date.getMonth()+1)+'月'+date.getDate()+'日'
})