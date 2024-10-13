/**
 * @param {string} s
 * @returns {string}
 * https://www.geeksforgeeks.org/problems/postfix-to-infix-conversion/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=postfix-to-prefix-conversion
 */

class Solution
{
    //Function to convert postfix expression to infix expression.
    postToInfix(s)
    {
        //your code here
        let i = 0;
        let n = s.length;
        let st = [];

        while(i < n) {
            if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')) {
                st.push(s[i]);
            } else {
                let t2 = st[st.length - 1];
                st.pop();
                let t1 = st[st.length - 1];
                st.pop();

                let conv = '(' + t1 + s[i] + t2 + ')';
                st.push(conv);
            }
            i++;
        }

        return st[st.length - 1];
    }
}