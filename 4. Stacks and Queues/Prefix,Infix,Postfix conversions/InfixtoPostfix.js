
/**
 * @returns {number}
 * https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1
 * @param x
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
    // Function to convert an infix expression to a postfix expression.
    infixToPostfix(s) {
        // code here
        let i = 0;
        let n = s.length;
        let ans = '';
        let st = [];
        while(i < n) {
            if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <='9')) {
                ans += s[i];
            } else if(s[i] === '(') {
                st.push(s[i]);
            } else if(s[i] === ')') {
                while(st.length !== 0 && st[st.length - 1] !== '(') {
                    ans += st[st.length - 1];
                    st.pop();
                }
                st.pop(); // remove the opening bracket
            } else {
                while(st.length !== 0 && priority(s[i]) <= priority(st[st.length - 1])) {
                    ans += st[st.length - 1];
                    st.pop();
                }
                st.push(s[i]);
            }
            i++;
        }

        while(st.length !== 0) {
            ans += st[st.length - 1];
            st.pop();
        }
        return ans;
    }
}
