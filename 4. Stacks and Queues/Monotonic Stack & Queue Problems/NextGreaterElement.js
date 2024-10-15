// https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1

class Solution
{
    //Function to find the next greater element for each element of the array.
    nextLargerElement(arr, n)
    {
        // code here
        let st = [];
        let res = Array(n).fill(-1);
        for(let i = n - 1 ; i >= 0 ; i--) {
            while(st.length != 0 && st[st.length - 1] <= arr[i])  {
                st.pop();
            }
            if(st.length !== 0) res[i] = st[st.length - 1];
            st.push(arr[i]);
        }
        return res;
    }
}