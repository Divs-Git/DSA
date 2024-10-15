// https://www.interviewbit.com/problems/nearest-smaller-element/
module.exports = {
    //param A : array of integers
    //return a array of integers
    prevSmaller : function(A){
        let st = [];
        let res = Array(A.length).fill(-1);

        for(let i = 0 ; i < A.length ; i++) {
            while(st.length !== 0 && st[st.length - 1] >= A[i]) {
                st.pop();
            }
            if(st.length !== 0) res[i] = st[st.length - 1];
            st.push(A[i]);
        }
        return res;
    }
};
