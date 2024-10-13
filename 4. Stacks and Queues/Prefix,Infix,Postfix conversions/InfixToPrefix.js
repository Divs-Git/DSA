
/**
 * @param {string} x
 * @returns {number}
 */
function priority(x) {
    let ans = 0;
    if(x ==='^') {
        return 3;
    } else if(x === '/' || x === '*') {
        return 2;
    } else if(x === '+' || x === '-') {
        return 1;
    } else {
        return -1;
    }
}


class Solution {
    //Function to covert prefix expression to infix expression.
    preToInfix(s)
    {
        //your code here
        let i = 0;
        let n = s.length;
        let ans = '';
        let st = [];
        s = s.split('').reverse().join('');

        while(i < n) {
            if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <='9')) {
                ans += s[i];
            } else if(s[i] === '(') {
                st.push(s[i]);
            } else if(s[i] === ')') {
                while(st.length !== 0 && st[st.length - 1] !== '(') {
                    ans += st[st.length -1];
                    st.pop();
                }
                st.pop();
            } else {
                if(s[i] === '^') {
                    // controlled conversion
                    while(st.length !== 0 && priority(s[i]) <= priority(st[st.length -1])) {
                        ans += st[st.length -1];
                        st.pop();
                    }

                } else {
                    while(st.length !== 0 && priority(s[i]) < priority(st[st.length -1])) {
                        ans += st[st.length -1];
                        st.pop();
                    }
                }
                st.push(s[i]);
            }
            i++;
        }
        while(st.length !== 0) {
            ans += st[st.length - 1];
            st.pop();
        }

        return ans.split('').reverse().join('');
    }

}