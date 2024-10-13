/**
 * @param {string} s
 * @returns {string}
 * https://www.geeksforgeeks.org/problems/prefix-to-postfix-conversion/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=prefix-to-postfix-conversion
 */

class Solution {
    //Function to convert prefix expression to postfix expression.
    preToPost(s) {
        let n = s.length;
        let i = n;
        let st = [];

        while(i >= 0) {
            if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')) {
                st.push(s[i]);
            } else {
                let t1 = st[st.length - 1];
                st.pop();
                let t2 = st[st.length - 1];
                st.pop();

                let conv = t1 + t2 + s[i];
                st.push(conv);
            }
            i--;
        }

        return st[st.length - 1];
    }
}