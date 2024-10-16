// https://leetcode.com/problems/remove-k-digits/description/
function removeKdigits(num: string, k: number): string {
    let deque: string[] = [];
    for(const ch of num) {
        while(deque.length !== 0 && k > 0 && deque[deque.length - 1] > ch ) {
            deque.pop();
            k--;
        }
        deque.push(ch);
    }
    while(k > 0) {
        deque.pop();
        k--;
    }

    while(deque.length !== 0 && deque[0] === '0') {
        deque.shift();
    }
    if(deque.length === 0) {
        return '0';
    }

    return deque.join('');
};