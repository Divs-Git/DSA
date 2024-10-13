
/**
 * @param {string} s
 * @returns {string}
 * https://www.geeksforgeeks.org/problems/prefix-to-infix-conversion/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=prefix-to-infix-conversion
 */

class Solution {
    //Function to covert prefix expression to infix expression.
    preToInfix(s)
    {
        //your code here

        let n = s.length;
        let i = n - 1;
        let st = [];

        while(i >= 0) {
            if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')) {
                st.push(s[i]);
            } else {
                let t1 = st[st.length - 1];
                st.pop();
                let t2 = st[st.length - 1];
                st.pop();

                let conv = '(' + t1 + s[i] + t2 + ')';
                st.push(conv);
            }
            i--;
        }

        return st[st.length - 1];
    }
}