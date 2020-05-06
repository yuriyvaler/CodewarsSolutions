//https://www.codewars.com/kata/credit-card-mask
const creditCardMask = cc => (cc.length > 4) ?
    '#'.repeat(cc.length - 4) + cc.slice(-4): cc;